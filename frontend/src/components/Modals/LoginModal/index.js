import { useState } from "react";
import LoginForm from "../../LoginForm";

import { Modal } from "../../../contex/Modal";

function LoginModal({ showModal, setShowModal }) {
  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default LoginModal;
