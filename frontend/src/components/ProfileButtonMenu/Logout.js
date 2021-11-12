import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../../redux/user";

import "./logout.css";

const Logout = ({ setShowProfileMenu }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = async (event) => {
    event.preventDefault();
    let status = await dispatch(logoutUser());
    console.log(status);
    if (status.ok) {
      setShowProfileMenu(false);
      history.push("/");
    }
  };

  return (
    <div onClick={handleLogout} id="profile-button-logout">
      Logout
    </div>
  );
};

export default Logout;
