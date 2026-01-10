import React from "react";
import "./App.css";
import Login from "./commponents/Login";
import Admin from "./commponents/Admin";
import Dashboard from "./commponents/Dashboard";
import Profile from "./commponents/Profile";
import Register from "./commponents/Register";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Router>
        <div className="content">
          <h2 className="title-app">User Management System</h2>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </nav>
          <div className="route-content">
            {" "}
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
