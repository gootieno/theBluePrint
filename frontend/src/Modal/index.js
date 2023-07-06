import ReactDom from "react-dom";
import "./modal.css";

const Modal = ({ children, open }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div id="modal-overlay"></div>
      <div id="modal-container">{children}</div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
