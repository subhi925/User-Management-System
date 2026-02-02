import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../fire";

const PrivateRoute = ({ element: Component }) => {
  // Firebase Auth Hook
  //----------------------------
  // user: current logged-in user object
  // loading: boolean, true while auth state is loading
  const [user, loading] = useAuthState(auth);

  //----------------------------
  // React Router location
  //----------------------------
  // location: stores the current route info
  const location = useLocation();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
    return <Component />;
};
export default PrivateRoute;
