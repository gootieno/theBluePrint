import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <input
        value={credentials.email}
        onChange={handleCredentials}
        name="email"
      />
      <input
        value={credentials.password}
        onChange={handleCredentials}
        name="password"
      />
      <br />
      <button>Submit</button>
    </div>
  );
};

export default Login;
