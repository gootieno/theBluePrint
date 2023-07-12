import { Outlet, Navigate } from "react-router-dom";
import { BP_COOKIE, getCookieFromStorage } from "../redux/utils/authUtils";

const ProtectedRoutes = () => {
  const isLoggedIn = getCookieFromStorage(BP_COOKIE);

  console.log("is logged in from protected ", isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
