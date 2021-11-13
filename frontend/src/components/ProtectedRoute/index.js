import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, path, isAuthenticated }) => {
  return isAuthenticated ? (
    <Route to={path}>{children}</Route>
  ) : (
    <Redirect to="/" />
  );
};

export default ProtectedRoute;
