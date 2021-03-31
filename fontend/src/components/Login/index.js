import React from "react";

const Login = ({ credentials }) => {
  const { email, password } = credentials;

  const handleLogin = (e) => {
    e.preventDefault();
    alert("you logged in!");
  };
  return (
    <form onSubmit={handleLogin}>
      <input type="text" placeHolder="Email" name="email" value={email} />
      <input
        type="password"
        placeHolder="password"
        name="password"
        value={password}
      />
      <button onClick={handleLogin}>login</button>
    </form>
  );
};

export default Login;
