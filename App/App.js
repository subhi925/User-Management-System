import React from "react";
import "./App.css";
import Login from "./commponents/Login";
import Admin from "./commponents/Admin";
import Dashboard from "./commponents/Dashboard";
import Profile from "./commponents/Profile";
import Register from "./commponents/Register";
import PrivateRoute from "./commponents/PrivateRoute";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import Navbar from "./commponents/Navbar";

const App = () => {
  return (
    <div className="container">
      <Router>
        <div className="content">
          <h2 className="title-app">User Management System</h2>
          <Navbar />
          <div className="route-content">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/login" />} />
              {/* Private Routes: accessible only if user is logged in */}
              <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
              <Route path="/admin" element={<PrivateRoute element={Admin} />} />
              <Route path="/profile" element={<PrivateRoute element={Profile} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
