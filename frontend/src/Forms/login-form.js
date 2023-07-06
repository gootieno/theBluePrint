import { useState } from "react";
import "./login-form.css";

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "password":
        setPassword(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="login-form-container">
      <form id="login-form" onSubmit={handleSubmit}>
        <h3 id="login-form-heading">Login</h3>
        <label
          htmlFor="email"
          id="form-email-label"
          className="login-form-items"
        >
          Enter Email
        </label>
        <input
          name="email"
          id="login-email"
          className="login-form-items"
          onChange={handleChange}
          value={email}
        />
        <label
          htmlFor="password"
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
