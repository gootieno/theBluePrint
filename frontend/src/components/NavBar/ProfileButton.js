import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/PersonOutlineOutlined";
function ProfileButton() {
  const [openProfile, handleOpenProfile] = useState(false);

  const handleOpen = () => {
    alert("profile button was clicked");
  };
  return (
    <>
      <PersonIcon onClick={handleOpen} />
    </>
  );
}

export default ProfileButton;
