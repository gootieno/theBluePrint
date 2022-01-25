import { Modal } from "../../../context/Modal";
import StepsForm from "../../Steps/StepsForm";

function StepModal({ showStepForm, setShowStepForm }) {
  return (
    <>
      {showStepForm && (
        <Modal onClose={() => setShowStepForm(false)}>
          <StepsForm setShowStepForm={setShowStepForm} />
        </Modal>
      )}
    </>
  );
}
export default StepModal;
