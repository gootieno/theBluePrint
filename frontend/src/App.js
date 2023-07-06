import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import Garage from "./Garage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoute";
import { BP_COOKIE, getCookieFromStorage } from "./redux/utils/authUtils";

import { useState, useEffect } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getCookieFromStorage(BP_COOKIE);

    if (token !== null) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, [isLoggedIn]);

  if (!isLoggedIn) return null;
  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn} />}>
          <Route element={<Garage />} exact path="/garage/:garageId" />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
