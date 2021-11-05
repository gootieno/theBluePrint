import { useState } from "react";
import LoginForm from "../LoginForm";

import { Modal } from "../../contex/Modal";

function LoginModal({ showModal, setShowModal }) {
  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginModal;
