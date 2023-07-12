import { Outlet, Navigate } from "react-router-dom";
import { BP_COOKIE, getCookieFromStorage } from "../redux/utils/authUtils";

const ProtectedRoutes = ({ isLoggedIn }) => {
  // const isLoggedIn = getCookieFromStorage(BP_COOKIE);
  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
