import { useState } from "react";
import LoginModal from "../LoginModal";

import "./navbar.css";

function NavBar() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((prevState) => !prevState);
  };
  return (
    <div id="navbar" className="navbar-container">
      <div id="landing-page-feed-button">
        <div
          id="feed-button"
          type="button"
          onClick={() => alert("feed need to be wired")}
          className="landing-page-buttons"
        >
          FEED
        </div>
      </div>

      <h2 id="landing-page-title">theBluePrint</h2>

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
