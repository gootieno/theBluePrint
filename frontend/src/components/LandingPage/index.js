import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// import jdm from "../../media/jdm.png";
// import evo from "../../media/evo9-image-revised.png";
// import turbo from "../../media/turbo.png";
// import rotor from "../../media/rotor.png";
// import exhaust from "../../media/exhaust.png";
// import rx7 from "../../media/rx7.png";
// import piston from "../../media/piston.png";
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
    history.push("/garage");
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
          <div
            onClick={() => alert("feed need to be wired")}
            className="feed-button landingPage-buttons"
          >
            STORE
          </div>
        </div>

        <div className="landingPage-banner-images">
          <img id="turbo" className="landingPage-banner-icons" src={turbo} />
          <img
            id="piston-1"
            className="landingPage-banner-icons"
            src={piston}
          />
          <img
            id="exhaust"
            className="landingPage-banner-icons"
            src={exhaust}
          />
          <img id="rotor-2" className="landingPage-banner-icons" src={rotor} />
          <img id="evo" className="landingPage-banner-icons" src={evo} />
          <img id="rotor" className="landingPage-banner-icons" src={rotor} />
          <img id="rx7" className="landingPage-banner-icons" src={rx7} />
          <img
            id="turbo-2"
            className="landingPage-banner-icons"
            src={turbo}
          />{" "}
          <img
            id="piston-2"
            className="landingPage-banner-icons"
            src={piston}
          />
          <img className="landingPage-banner-image" src={jdm} />{" "}
        </div>

        <div className="landingPage-login">
          <div
            type="button"
            id="login-button"
            value={login}
            onClick={handleClick}
            className="login-button blinking landingPage-buttons"
          >
            ENTER
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
