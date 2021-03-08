import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavBar } from "./Styles/landingpage";

const LandingPage = () => {
  const history = useHistory();

  const handleLogin = () => {
    return history.push("/login");
  };
  return (
    <NavBar>
      <h1>title here</h1>
      <button login={handleLogin}>Login Icon</button>
    </NavBar>
  );
};

export default LandingPage;
