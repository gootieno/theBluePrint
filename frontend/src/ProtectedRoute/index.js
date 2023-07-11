import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const user = useSelector((state) => state.user);
  return user?.isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
