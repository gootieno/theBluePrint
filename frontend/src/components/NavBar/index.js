import { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import LoginModal from "../LoginModal";

import LoginIcon from "@mui/icons-material/Login";

import "./navbar.css";

function NavBar() {
  const [showModal, setShowModal] = useState(false);

  const match = useRouteMatch("/");

  const history = useHistory();
  const handlePageTitle = () => {
    history.push("/");
  };

  const handleShowModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <div id="navbar-container">
      <h1 id="landing-page-title" onClick={handlePageTitle}>
        theBluePrint
      </h1>
      <div id="landing-page-login-button">
        <div
          type="button"
          id="login-button"
          className="landing-page-buttons"
          onClick={handleShowModal}
        >
          LOGIN
        </div>
        <LoginIcon onClick={handleShowModal} />
      </div>
      <LoginModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default NavBar;
