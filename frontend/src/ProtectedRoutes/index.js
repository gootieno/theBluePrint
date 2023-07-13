import { useSelector } from "react-redux";
import { Outlet, redirect } from "react-router-dom";

const ProtectedRoutes = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  console.log(isLoggedIn);
  if (!isLoggedIn) redirect("/");
  return isLoggedIn && <Outlet />;
};

export default ProtectedRoutes;
