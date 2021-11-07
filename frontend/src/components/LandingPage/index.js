import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/user";

import LoginModal from "../LoginModal";
import NavBar from "../NavBar";

import "./landingpage.css";

const LandingPage = () => {
  return <div id="landing-page" className="landing-page-container"></div>;
};

export default LandingPage;
