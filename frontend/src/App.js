import {
  BP_COOKIE,
  getCookieFromStorage,
  restoreUser,
} from "./redux/utils/authUtils";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import Garage from "./Garage";
import ProtectedRoutes from "./ProtectedRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/actions/userActions";

const App = () => {
  const [token, setToken] = useState(() => getCookieFromStorage(BP_COOKIE));
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const dispatch = useDispatch();
  let abortController = useMemo(() => new AbortController(), []);

  useEffect(() => {
    let isMounted = true;

    const verifyUserToken = async () => {
      try {
        if (token && isMounted) {
          const data = await restoreUser(abortController, token);
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

    return () => {
      isMounted = false;
      abortController.abort();
      setToken(null);
    };
  }, [abortController, dispatch, token]);

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
