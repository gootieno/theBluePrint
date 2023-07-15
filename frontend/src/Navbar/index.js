import FormModal from "../Context/FormModal";
import LoginForm from "../Forms/loginForm";
import { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../Context/FormModal";
import { BP_COOKIE, getCookieFromStorage } from "../redux/utils/authUtils";
import "./navbar.css";
import { logoutUser } from "../redux/users";

const Navbar = () => {
  const { setIsOpen, isOpen } = useContext(ModalContext);
  const [dropDown, setDropDown] = useState(false);

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    console.log("closing modal");
    setIsOpen(false);
  };

  const handleDropDown = (event) => {
    setDropDown((prev) => !prev);
    dispatch(logoutUser());
    navigate("/");
  };

  console.log("navBar is logged in", isLoggedIn);

  const navIcon = isLoggedIn ? (
    <div
      id={dropDown ? "showDropDown" : "hideDropDown"}
      className="icon navbar-items"
      onClick={handleDropDown}
    >
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
      <FormModal isOpen={isOpen}>
        <LoginForm onClose={closeModal} />
      </FormModal>
    </>
  );
};

export default Navbar;
