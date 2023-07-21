import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You do not have access");
      return <Navigate to="/" />;
    }
  } else {
    alert("You do not have access");
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default PrivateRouter;
