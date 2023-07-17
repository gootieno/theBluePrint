import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/users";

import "./login-form.css";

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const emailRef = useRef();
  const errorRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setError("");
  }, [email, password]);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "password":
        setPassword(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      default:
        return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const garageId = await dispatch(loginUser({ email, password }));
      // await dispatch(loadGarage(garageId));
      setEmail("");
      setPassword("");

      navigate(`/garage/${garageId}`);
      onClose();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div id="login-form-container">
      <form id="login-form" onSubmit={handleSubmit}>
        {error && (
          <p ref={errorRef} className="login-errors">
            {error}
          </p>
        )}
        <h3 id="login-form-heading">Login</h3>
        <label
          htmlFor="login-email"
          id="form-email-label"
          className="login-form-items"
        >
          Enter Email
        </label>
        <input
          name="email"
          id="login-email"
          className="login-form-items"
          autoComplete="off"
          ref={emailRef}
          onChange={handleChange}
          value={email}
          required
          type="email"
        />
        <label
          htmlFor="login-password"
          id="form-password-label"
          className="login-form-items"
        >
          Enter Password
        </label>
        <input
          name="password"
          id="login-password"
          className="login-form-items"
          onChange={handleChange}
          value={password}
          type="password"
          required
        />
        <div id="form-buttons-container" className="login-form-items">
          <button id="submit-button" className="form-buttons" name="submit">
            Submit
          </button>
          <button
            name="close"
            id="close-login-modal"
            className="form-buttons"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
