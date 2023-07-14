import { Outlet, useLocation, Navigate } from "react-router-dom";
import { BP_COOKIE, getCookieFromStorage } from "../redux/utils/authUtils";

const ProtectedRoutes = () => {
  const isLoggedIn = getCookieFromStorage(BP_COOKIE);
  const location = useLocation();
  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
