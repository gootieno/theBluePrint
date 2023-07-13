import {
  BP_COOKIE,
  getCookieFromStorage,
  restoreUser,
} from "./redux/utils/authUtils";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import ProtectedRoutes from "./ProtectedRoutes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ModalProvider } from "./Context/FormModal";
import { useSelector } from "react-redux";

import { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/actions/userActions";
import Garage from "./Garage";

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
          console.log("data ", data);
          if (data?.access_token)
            dispatch(
              setUser({ authenticated: data, message: "Token refreshed" })
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

  console.log("is logged in ", isLoggedIn);
  return (
    <ModalProvider>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route
            path="/garage/*"
            element={<ProtectedRoutes isLoggedIn={isLoggedIn} />}
          >
            <Route path=":garageId" element={<Garage />} />
          </Route>
        </Routes>
      </Router>
    </ModalProvider>
  );
};

export default App;
