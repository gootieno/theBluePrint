import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import jdm from "../../media/jdm.jpeg";
import evo from "../../media/evoWallpaper.jpeg";
import Login from "../Login";
import "./landingpage.css";

const LandingPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [login, setLogin] = useState(false);

  const history = useHistory();
  const handleCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.name });
  };

  const handleClick = (e) => {
    e.target.id === "login-button"
      ? setLogin((prevState) => !prevState)
      : setLogin(false);
  };

  return (
    <div id="landing-page" className="landingPage">
      <div
        className="landingPage-home-icon"
        onClick={() => alert("click works")}
      >
        <h2 id="home">theBluePrint</h2>
      </div>
      <div className="landingPage-banner-container">
        <div className="landingPage-feed">
          <button className="feed-button">Feed</button>
        </div>
        <div className="landingPage-banner-images">
          <img className="landingPage-banner-images-evo" src={jdm} />
        </div>
        <div id="login-button" className="landingPage-login">
          {!login && (
            <button
              id="login-button"
              value={login}
              onClick={handleClick}
              className="login-button"
            >
              Enter
            </button>
          )}
          {login && <Login credentials={credentials} />}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
