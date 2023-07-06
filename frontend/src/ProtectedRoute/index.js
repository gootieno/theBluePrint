import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = ({ isLoggedIn }) => {
  console.log("is logged in ", isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
