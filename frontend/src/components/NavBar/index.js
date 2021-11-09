import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginModal from "../Modals/LoginModal";

import LoginIcon from "@mui/icons-material/Login";

import "./navbar.css";
import ProfileButton from "./ProfileButton";

function NavBar({ isLoaded }) {
  const [showModal, setShowModal] = useState(false);

  const user = useSelector((state) => state.user);

  const history = useHistory();

  const handlePageTitle = () => {
    history.push("/");
  };

  const handleShowModal = () => {
    setShowModal((prevState) => !prevState);
  };

  let loggedIn;
  if (user) {
    loggedIn = (
      <div id="profile-button">
        <ProfileButton />
      </div>
    );
  } else {
    loggedIn = (
      <>
        <div
          type="button"
          id="login-button"
          className="landing-page-buttons"
          onClick={handleShowModal}
        >
          LOGIN
        </div>
        <LoginIcon onClick={handleShowModal} />
        <LoginModal showModal={showModal} setShowModal={setShowModal} />
      </>
    );
  }

  return (
    <div id="navbar-container">
      <h1 id="landing-page-title" onClick={handlePageTitle}>
        theBluePrint
      </h1>
      <div id="landing-page-login-button">{isLoaded && loggedIn}</div>
    </div>
  );
}

export default NavBar;
