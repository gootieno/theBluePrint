import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../redux/user";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import CloseIcon from "@mui/icons-material/Close";

import "./login.css";

const LoginForm = ({ setShowLoginModal }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(loginUser(credentials));
    setShowLoginModal(false);
    if (user) history.push("/home");
  };
  return (
    <form type="submit" className="form-container" onSubmit={handleLogin}>
      <h3 id="login-title"> Welcome Back!</h3>
      <input
        id="email"
        type="text"
        placeholder="Email"
        name="email"
        value={credentials.email}
        className="login-input-fields"
        onChange={handleInputChange}
      />
      <input
        id="password"
        type="password"
        placeholder="password"
        name="password"
        value={credentials.password}
        className="login-input-fields"
        onChange={handleInputChange}
      />
      <div id="login-submit-container">
        <div
          type="button"
          id="login-close"
          onClick={() => setShowLoginModal(false)}
        >
          <CloseIcon />
        </div>
        <div type="button" id="login-submit" onClick={handleLogin}>
          <DoubleArrowIcon />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
