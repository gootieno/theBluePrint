import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/users";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(loginUser({ email, password }));
  };

  return (
    <div>
      <form id="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Enter Email</label>
        <input
          name="email"
          value={email}
          className="login-form-inputs"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Enter Password</label>
        <input
          name="password"
          value={password}
          className="login-form-inputs"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button name="submit-button" className="login-form-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
