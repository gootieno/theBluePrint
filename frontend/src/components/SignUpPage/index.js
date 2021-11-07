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
      <div id="signup-form-terms-and-conditions">
        <h3 id="signup-page-terms-and-conditions">Terms and conditions</h3>
        <p id="signup-page-terms-body"> Live, Laugh, Love</p>
        <input id="signup-page-terms-confirm" type="checkbox" />
      </div>
    </div>
  );
}

export default SignUpPage;
