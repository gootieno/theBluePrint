import { useState } from "react";
import Logout from "./Logout";

import "./profilebutton.css";

const ProfileButtonMenu = ({ setShowProfileMenu }) => {
  const [profileButtonMenuItems, setProfileButtonMenuItems] = useState({
    profile: "",
    friends: [],
  });
  return (
    <div id="profile-menu-items-container">
      <Logout setShowProfileMenu={setShowProfileMenu} />
      <div id="profile-menu-cancel" onClick={() => setShowProfileMenu(false)}>
        cancel
      </div>
    </div>
  );
};

export default ProfileButtonMenu;
