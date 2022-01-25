import { useContext } from "react";
import { FormContext } from "../../context/Form";

const BlueprintForm = () => {
  const { formValue, handleFormChange } = useContext(FormContext);

  return (
    <>
      <label
        htmlFor="blueprint-image"
        className="blueprint-image-title"
        name="image"
      >
        Select Cover Image
      </label>
      <input
        id="blueprint-image"
        type="file"
        value={formValue.image}
        name="image"
        className="crud-actions"
        onChange={handleFormChange}
      />
    </>
  );
};

export default BlueprintForm;
