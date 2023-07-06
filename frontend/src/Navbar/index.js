import { useState } from "react";
import "./navbar.css";
import Modal from "../Modal";
import LoginForm from "../Forms/login-form";

const Navbar = ({ setIsLoggedIn, isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navIcon = isLoggedIn ? (
    <img id="nav-icon-image" src="/assets/license.png" alt="logged in icon" />
  ) : (
    <img id="nav-icon-image" src="/assets/login-icon.png" alt="login icon" />
  );

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header id="navbar-container">
        <h2 id="navbar-heading" className="navbar-items">
          theBlueprint
        </h2>
        <div id="icon-container" className="navbar-items">
          <div className="icon navbar-items" onClick={openModal}>
            {navIcon}
          </div>
        </div>
      </header>
      <Modal open={!isLoggedIn && isOpen} onClose={closeModal}>
        <LoginForm onClose={closeModal} setIsLoggedIn={setIsLoggedIn} />
      </Modal>
    </>
  );
};

export default Navbar;
