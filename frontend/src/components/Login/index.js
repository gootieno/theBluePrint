import "./login.css";

const Login = ({ handleInputChange, credentials, handleLogin }) => {
  return (
    <form className="form-container" onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={credentials.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={credentials.password}
        onChange={handleInputChange}
      />
      <button onClick={handleLogin}>login</button>
    </form>
  );
};

export default Login;
