import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import Garage from "./Garage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoute";
import {
  BP_COOKIE,
  getCookieFromStorage,
  restoreUser,
} from "./redux/utils/authUtils";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/garage/:garageId" element={<Garage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
