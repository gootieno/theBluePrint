import { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../redux/user";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import CloseIcon from "@mui/icons-material/Close";

import "./login.css";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await dispatch(loginUser(credentials));
    if (success) history.push("/garage");
  };
  return (
    <form className="form-container" onSubmit={handleLogin}>
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
      <div id="login-submit-container" onClick={handleLogin}>
        <div id="login-close">
          <CloseIcon />
        </div>
        <div id="login-submit">
          <DoubleArrowIcon />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
