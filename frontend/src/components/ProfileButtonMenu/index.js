import { useState } from "react";

const ProfileButtonMenu = ({ setShowProfileMenu }) => {
  const [profileButtonMenuItems, setProfileButtonMenuItems] = useState({
    profile: "",
    friends: [],
  });
  return (
    <div id="profile-menu-items-container">
      <div>Profile</div>
      <div>Friends</div>
      <div onClick={() => setShowProfileMenu(false)}>cancel</div>
    </div>
  );
};

export default ProfileButtonMenu;
