import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// import jdm from "../../media/jdm.png";
// import evo from "../../media/evo9-image-revised.png";
// import turbo from "../../media/turbo.png";
// import rotor from "../../media/rotor.png";
// import exhaust from "../../media/exhaust.png";
// import rx7 from "../../media/rx7.png";
// import piston from "../../media/piston.png";
import NavBar from "../NavBar";
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
    <div id="landing-page" className="landing-page-container">
      <NavBar />
    </div>
  );
};

export default LandingPage;
