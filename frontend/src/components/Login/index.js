import "./login.css";

const Login = ({
  handleInputChange,
  credentials,
  handleLogin,
  handleLoginModal,
}) => {
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
      <button id="cancel-button" onClick={handleLoginModal}>
        cancel
      </button>
    </form>
  );
};

export default Login;
