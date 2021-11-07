import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/user";

import LoginModal from "../LoginModal";
import NavBar from "../NavBar";

import "./landingpage.css";

const LandingPage = () => {
  return (
    <>
      <div id="landing-page" className="landing-page-container">
        <div id="landing-page-message-container" className="landing-page-text">
          <div id="landing-page-message">
            <h2>A Place Where You Can </h2>
            <h2 id="landing-page-revolving-text">Design</h2>
          </div>
          <div id="registration-container">
            <h2 className="registration-text">
              Don't have an account yet? Join us free today!
            </h2>
            <h2 className="registration-text">
              Browsing around? Try the demo account!
            </h2>
            <h3 id="registration-signup" className="registration-text">
              create an account
            </h3>
            <h3
              type="button"
              id="registration-demo"
              className="registration-text"
            >
              Demo
            </h3>
          </div>
        </div>
        <div id="landing-page-footer">dev icons here</div>
      </div>
    </>
  );
};

export default LandingPage;
