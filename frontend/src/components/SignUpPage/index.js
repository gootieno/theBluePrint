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
    <div id="signup-form-container">
      <div id="signup-form">
        <input id="signup-username" type="text" placeholder="username" />
        <input id="signup-email" type="email" placeholder="email" />
        <input id="signup-password" type="password" placeholder="password" />
        <input
          id="signup-confirm-password"
          type="password"
          placeholder="confirm password"
        />
      </div>
      <div id="signup-form-terms-and-conditions">
        <p>some text here</p>
      </div>
    </div>
  );
}

export default SignUpPage;
