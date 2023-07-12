import Modal from "../Modal";
import LoginForm from "../Forms/login-form";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./navbar.css";
import {
  BP_COOKIE,
  getCookieFromStorage,
  removeCookieFromStorage,
} from "../redux/utils/authUtils";
import { logoutUser } from "../redux/users";

const Navbar = ({ isLoggedIn}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const isLoggedIn = getCookieFromStorage(BP_COOKIE);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    // removeCookieFromStorage(BP_COOKIE);
    dispatch(logoutUser());
    navigate("/");
  };

  const navIcon = isLoggedIn ? (
    <div className="icon navbar-items" onClick={handleLogout}>
      <img id="nav-icon-image" src="/assets/license.png" alt="logged in icon" />
    </div>
  ) : (
    <div className="icon navbar-items" onClick={openModal}>
      <img id="nav-icon-image" src="/assets/login-icon.png" alt="login icon" />
    </div>
  );

  return (
    <>
      <header id="navbar-container">
        <h2 id="navbar-heading" className="navbar-items">
          theBlueprint
        </h2>
        <div id="icon-container" className="navbar-items">
          {navIcon}
        </div>
      </header>
      <Modal open={isOpen} onClose={closeModal}>
        <LoginForm onClose={closeModal} />
      </Modal>
    </>
  );
};

export default Navbar;
