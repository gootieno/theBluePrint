import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import { signupUser } from "../../redux/user";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

import "./signup.css";
import Title from "./Title";

function SignUpPage() {
  const [signUpForm, setSignUpForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [termsAndConditions, setTermsAndConditions] = useState(false);

  const user = useSelector((state) => state.session.user);

  const handleTermsAndConditions = () => {
    setTermsAndConditions((prevState) => !prevState);
  };

  const history = useHistory();
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setSignUpForm({ ...signUpForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await dispatch(signupUser(signUpForm));
    if (user) {
      history.push("/home");
    }
  };
  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Title />
      <div id="signup-form-page-container">
        <form id="signup-form-container" onSubmit={handleSubmit} type="submit">
          <input
            className="signup-page-terms-content"
            id="signup-username"
            type="text"
            placeholder="username"
            value={signUpForm.username}
            name="username"
            onChange={handleInputChange}
          />
          <input
            className="signup-page-terms-content"
            id="signup-email"
            type="email"
            placeholder="email"
            value={signUpForm.email}
            name="email"
            onChange={handleInputChange}
          />
          <input
            className="signup-page-terms-content"
            id="signup-password"
            type="password"
            placeholder="password"
            value={signUpForm.password}
            name="password"
            onChange={handleInputChange}
          />
          <input
            id="signup-confirm-password"
            type="password"
            placeholder="confirm password"
            className="signup-page-terms-content"
            value={signUpForm.confirmPassword}
            name="confirmPassword"
            onChange={handleInputChange}
          />
        </form>
        <div id="signup-form-terms-and-conditions-container">
          <h2 id="signup-page-terms-and-conditions">Terms and conditions</h2>
          <h3 id="signup-page-terms-body"> Live, Laugh, Love</h3>
          <span id="signup-page-confirm-container">
            <input
              id="signup-page-terms-confirm"
              name="termsAndConditions"
              type="checkbox"
              value={termsAndConditions}
              onChange={handleTermsAndConditions}
            />
            <span>Agree?</span>
          </span>
          <div
            id="signup-form-submit"
            type="submit"
            className="signup-submit"
            onClick={handleSubmit}
          >
            <DoubleArrowIcon
              fontSize="small"
              id="signup-form-submit-icon"
              className="signup-submit"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
