import { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../redux/user";
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
      <h2 id="login-title"> LOGIN</h2>
      <input
        id="email"
        type="text"
        placeholder="Email"
        name="email"
        value={credentials.email}
        ß
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
      <button id="login-submit" onClick={handleLogin}>
        login
      </button>
    </form>
  );
};

export default LoginForm;
