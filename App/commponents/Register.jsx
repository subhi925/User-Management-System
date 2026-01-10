import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../fire";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handelRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        role: "user",
      });
      alert("User Registered Successfully");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mb-3">
      <h1 data-cy="Register">Register</h1>
      <div className="mb-3">
        <input
          className="form-control"
          data-cy="register-name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          data-cy="register-email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          data-cy="register-password"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        data-cy="register-btn"
        className="btn btn-primary"
        onClick={handelRegister}
      >
        Register
      </button>
    </div>
  );
};

export default Register;
