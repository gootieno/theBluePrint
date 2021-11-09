import ProfileButtonMenu from "../../ProfileButtonMenu";

import { Modal } from "../../../contex/Modal";

function ProfileButtonModal({ showProfileMenu, setShowProfileMenu }) {
  return (
    <>
      {showProfileMenu && (
        <Modal onClose={() => setShowProfileMenu(false)}>
          <ProfileButtonMenu setShowProfileMenu={setShowProfileMenu} />
        </Modal>
      )}
    </>
  );
}
export default ProfileButtonModal;
