import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { getUserBluePrints } from "../../redux/garage";

import { loginUser } from "../../redux/user";
import "./landing-page.css";

const LandingPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignUp = () => {
    history.push("/signup");
  };

  const handleDemoButton = async () => {
    try {
      let user = await dispatch(
        loginUser({ email: "demo@user.io", password: "password" })
      );
      if (user) {
        dispatch(getUserBluePrints(user.id));
        history.push("/garage");
      }
    } catch (error) {
      history.push("/");
    }
  };

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
                onClick={handleDemoButton}
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
