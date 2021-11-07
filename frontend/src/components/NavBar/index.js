import { useState } from "react";
import LoginModal from "../LoginModal";

import "./navbar.css";

function NavBar() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((prevState) => !prevState);
  };
  return (
    <div id="navbar-container">
      <h1 id="landing-page-title">theBluePrint</h1>
      <div id="landing-page-login-button">
        <div
          type="button"
          id="login-button"
          className="landing-page-buttons"
          onClick={handleShowModal}
        >
          LOGIN
        </div>
      </div>
      <LoginModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default NavBar;
