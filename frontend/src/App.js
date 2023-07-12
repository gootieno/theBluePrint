import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import Garage from "./Garage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoute";
import { useSelector } from "react-redux";
import {
  BP_COOKIE,
  getCookieFromStorage,
  restoreUser,
} from "./redux/utils/authUtils";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/actions/userActions";

const App = () => {
  const [token, setToken] = useState(() => getCookieFromStorage(BP_COOKIE));
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const dispatch = useDispatch();
  const abortController = new AbortController();

  useEffect(() => {
    let isMounted = true;

    const verifyUserToken = async () => {
      try {
        if (token && isMounted) {
          const data = await restoreUser(abortController, token);

          console.log("data from refresh token ", data);
          if (data)
            dispatch(
              setUser({ authenticated: true, message: "Token refreshed" })
            );
        }
      } catch (error) {
        console.error(error);
      }
    };

    verifyUserToken();
  }, [dispatch, token]);
  console.log("is logged in", isLoggedIn);
  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      {isLoggedIn && (
        <>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn} />}>
              <Route path="/garage/:garageId" element={<Garage />} />
            </Route>
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
