import React, { useState } from "react";
import nissan from "../../media/370z-image.jpg";
import evo from "../../media/evo.png";
import Login from "../Login";
import "./landingpage.css";

const LandingPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [login, setLogin] = useState(false);

  const handleCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.name });
  };

  return (
    <div className="landingPage">
      <div className="landingPage-home-icon">
        <a href="/">theBluePrint</a>
      </div>
      <div className="landingPage-banner-container">
        <div className="landingPage-feed">
          <button className="feed-button">Feed</button>
        </div>
        <div className="landingPage-banner-images">
          <img className="landingPage-banner-images-evo" src={evo} />
        </div>
        <div className="landingPage-login">
          <button
            value={login}
            onClick={() => setLogin((prevState) => !prevState)}
            className="login-button"
          >
            Enter
          </button>
          {login && <Login credentials={credentials} />}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
