import React from "react";

import { Modal } from "../../context/Modal";

function ProfileButtonModal({ openProfile, setOpenProfile }) {
  return (
    <>
      {openProfile && (
        <>
          <Modal onClose={() => setOpenProfile(false)}>
            <ProfileButtonMenu />
          </Modal>
        </>
      )}
    </>
  );
}
export default ProfileButtonModal;
