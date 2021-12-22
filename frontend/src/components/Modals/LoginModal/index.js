import LoginForm from "../../LoginForm";

import { Modal } from "../../../context/Modal";

function LoginModal({ showLoginModal, setShowLoginModal }) {
  return (
    <>
      {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)}>
          <LoginForm setShowLoginModal={setShowLoginModal} />
        </Modal>
      )}
    </>
  );
}

export default LoginModal;
