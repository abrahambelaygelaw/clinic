import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
const ProtectedRoute = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("accessToken");
  if (!isAuthenticated) {
    navigate("/login");
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
