import { useState } from "react";
import { useSelector } from "react-redux";

import "./welcome.css";

import React from "react";
import TileLetters from "../SignUpPage/TileLetters";

const Welcome = () => {
  const [welcomeSteps, setWelcomeSteps] = useState();
  const welcomeMessage = "Welcome To The Blueprint";
  const user = useSelector((state) => state.session.user);

  if (!user && !user.id) return null;
  return (
    <div id="welcome-message-container">
      <div id="welcome-message-letters-container">
        <TileLetters message={welcomeMessage} />
      </div>
    </div>
  );
};

export default Welcome;
