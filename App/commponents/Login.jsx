import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../fire";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const role = userDoc.data().role;

      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      alert("Login Failed");
    }
  };
  return (
    <div>
      <h1 data-c="Login">Login</h1>
      <div className="mb-3">
        <input
          className="form-control"
          data-cy="login-email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          data-cy="login-password"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        data-cy="login-btn"
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
