import React from "react";

const LoginPage = ({ credentials, handleCredentials }) => {
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
      <h1>
        {credentials.email} {credentials.password}
      </h1>
    </div>
  );
};

export default LoginPage;
