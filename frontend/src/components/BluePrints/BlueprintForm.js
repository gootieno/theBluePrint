import { useContext } from "react";
import { FormContext } from "../../context/Form";

const BlueprintForm = () => {
  const { handleFormChange } = useContext(FormContext);

  return (
    <>
      <label
        htmlFor="blueprint-image"
        className="blueprint-image-title"
        name="media"
      >
        Select Cover Image
      </label>
      <input
        id="blueprint-image"
        type="file"
        name="media"
        className="crud-actions"
        onChange={handleFormChange}
      />
    </>
  );
};

export default BlueprintForm;
