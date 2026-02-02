import { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../fire";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //------------------------------------------
  const logWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider); // Popup login
      const user = result.user; // Get the logged-in user info
      // Check if user document exists; if not, create one
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);
      if (!userDoc.exists())
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          role: "user",
        });

      const role = userDoc.data().role; // Get user role
      if (role === "admin") {
        navigate("/admin"); // Redirect admin users
      } else {
        navigate("/dashboard"); // Redirect regular users
      }
    } catch (error) {
      console.error("Google Login Error:", error); // Log any errors
    }
  };
  //------------------------------------------
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
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
      <hr />
      {/* Login with Google */}
      <button className="btn btn-danger" onClick={logWithGoogle}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
