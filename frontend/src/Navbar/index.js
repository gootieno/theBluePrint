import { useSelector } from "react-redux";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <header id="navbar-container">
        <h2 id="navbar-heading" className="navbar-items">
          theBlueprint
        </h2>
        <div id="icon-container" className="navbar-items">
          <div className="icon-login"></div>
          <div className="icon-login-arrow"></div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
