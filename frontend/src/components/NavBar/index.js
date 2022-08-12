import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginModal from "../Modals/LoginModal";
import ProfileButtonModal from "../Modals/ProfileButtonModal";
import PersonIcon from "@mui/icons-material/PersonOutlineOutlined";

import LoginIcon from "@mui/icons-material/Login";

import "./navbar.css";

function NavBar({
  isAuthenticated,
  showLoginModal,
  setShowLoginModal,
  handleShowModal,
}) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const user = useSelector((state) => state.session.user);

  const history = useHistory();

  const handlePageTitle = () => {
    if (user) {
      history.replace("/garage");
    } else {
      history.push("/");
    }
  };

  const handleProfileButton = () => {
    setShowProfileMenu(true);
  };

  let loggedIn;
  if (user !== null) {
    loggedIn = (
      <>
        <div id="profile-button" onClick={handleProfileButton}>
          <PersonIcon onClick={handleProfileButton} />
        </div>
        <ProfileButtonModal
          showProfileMenu={showProfileMenu}
          setShowProfileMenu={setShowProfileMenu}
        />
      </>
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
        <LoginModal
          showLoginModal={showLoginModal}
          setShowLoginModal={setShowLoginModal}
        />
      </>
    );
  }

  return (
    <div id="navbar-container">
      <h1 id="landing-page-title" onClick={handlePageTitle}>
        theBluePrint
      </h1>
      <div id="landing-page-login-button">{isAuthenticated && loggedIn}</div>
    </div>
  );
}

export default NavBar;
