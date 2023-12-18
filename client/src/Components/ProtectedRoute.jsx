import { Outlet, Navigate, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
const ProtectedRoute = ({ allowedRoles }) => {
  // const { auth } = useAuth();
  const user = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();
  return allowedRoles?.includes(user?.role) ? (
    <>
      <Navigation />
      {/* <Outlet /> */}
    </>
  ) : user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
