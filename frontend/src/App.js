import {
  BP_COOKIE,
  getCookieFromStorage,
  restoreUser,
} from "./redux/utils/authUtils";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import ProtectedRoutes from "./ProtectedRoutes";
import { Route, Routes } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { useState, useEffect, useMemo } from "react";
import { setUser } from "./redux/actions/userActions";
import Garage from "./Garage";
import { logoutUser } from "./redux/users";

const App = () => {
  let abortController = useMemo(() => new AbortController(), []);
  const [token, setToken] = useState(() => getCookieFromStorage(BP_COOKIE));
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;

    const restoreUserToken = async () => {
      if (isMounted && token) {
        console.log("in the restore user");
        const data = await dispatch(restoreUser(abortController));
        if (!data.access_token) {
          setToken(null);
          dispatch(logoutUser());
        }
      }
    };
    restoreUserToken();

    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, [abortController, token]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="garage/:garageId" element={<Garage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
