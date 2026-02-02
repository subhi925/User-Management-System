import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../fire";
import { signOut } from "firebase/auth"; // Firebase auth functions
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../fire";
import "../App.css";
const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [tRole, setTRole] = useState(null);

  //------------------------------------------

  const handleOut = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Signout Error", error); // Log error if any
    }
  };
  //--------------------------------------
  useEffect(() => {
    const handleRole = async () => {
      if (user) {
        const dbuser = doc(db, "users", user.uid);
        const role = await getDoc(dbuser);
        setTRole(role.data().role);
      }
    };
    handleRole();
  }, [user]);
  //Debugs
  useEffect(() => {
    console.log("Current User:", user);
  }, [user]);
  return (
    <div>
      <nav className="navbar">
        <ul>
          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}

          {user && tRole === "admin" && (
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          )}
          {user && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}

          {user && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}

          {user && tRole === "admin" && (
            <li>
              <Link to="/register">Register</Link>
            </li>
          )}
          {user && (
            <li>
              <Link onClick={handleOut}>Logout</Link>
            </li>
          )}
          <li>
            <Link to="/">54545</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
