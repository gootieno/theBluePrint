import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginUser } from "../../redux/user";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./landingpage.css";

const LandingPage = ({ isAuthenticated }) => {
  const history = useHistory();

  const handleSignUp = () => {
    history.push("/signup");
  };

  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

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
            <h3
              id="registration-signup"
              className="registration-text"
              onClick={handleSignUp}
            >
              Create an account
            </h3>
            <span>
              <h3
                type="button"
                id="registration-demo"
                className="registration-text"
              >
                Demo
              </h3>
            </span>
          </div>
        </div>
      </div>{" "}
      <div id="landing-page-footer">
        <GitHubIcon
          fontSize="large"
          id="landing-page-github"
          className="landing-page-footer-icons
            "
        />
        <LinkedInIcon
          fontSize="large"
          id="landing-page-linkedin"
          className="landing-page-footer-icons
            "
        />
      </div>
    </>
  );
};

export default LandingPage;
