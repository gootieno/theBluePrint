import { createContext, useContext } from "react";
import useModal from "../Hooks/useModal";
import ReactDom from "react-dom";
import "./modal.css";

export const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const { isOpen, setIsOpen } = useModal();

  return (
    <ModalContext.Provider value={{ setIsOpen, isOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

const FormModal = ({ children }) => {
  const { isOpen } = useContext(ModalContext);

  if (!isOpen) return null;
  return ReactDom.createPortal(
    <>
      <div id="modal-overlay"></div>
      <div id="modal-container">{children}</div>
    </>,
    document.getElementById("portal")
  );
};

export default FormModal;
