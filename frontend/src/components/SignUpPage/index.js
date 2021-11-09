import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./signup.css";

function SignUpPage() {
  const [signUpForm, setSignUpForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const history = useHistory();

  return (
    <>
      <h1 id="signup-form-page-title">It all starts here!</h1>
      <div id="signup-form-page-container">
        <form id="signup-form-container">
          <input
            className="signup-page-terms-content"
            id="signup-username"
            type="text"
            placeholder="username"
          />
          <input
            className="signup-page-terms-content"
            id="signup-email"
            type="email"
            placeholder="email"
          />
          <input
            className="signup-page-terms-content"
            id="signup-password"
            type="password"
            placeholder="password"
          />
          <input
            id="signup-confirm-password"
            type="password"
            placeholder="confirm password"
            className="signup-page-terms-content"
          />
        </form>
        <div id="signup-form-terms-and-conditions-container">
          <h2 id="signup-page-terms-and-conditions">Terms and conditions</h2>
          <h3 id="signup-page-terms-body"> Live, Laugh, Love</h3>
          <span id="signup-page-confirm-container">
            <input id="signup-page-terms-confirm" type="checkbox" />
            <span>Agree?</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
