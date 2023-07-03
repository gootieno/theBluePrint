import { useSelector } from "react-redux";
import "./navbar.css";

const Navbar = () => {
  const isLoggedIn = false;

  const navIcon = isLoggedIn ? (
    <img id="nav-icon-image" src="/assets/license.png" />
  ) : (
    <img id="nav-icon-image" src="/assets/login-icon.png" />
  );

  return (
    <>
      <header id="navbar-container">
        <h2 id="navbar-heading" className="navbar-items">
          theBlueprint
        </h2>
        <div id="icon-container" className="navbar-items">
          <div className="icon navbar-items">{navIcon}</div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
