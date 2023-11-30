import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
const ProtectedRoute = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("accessToken");
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
