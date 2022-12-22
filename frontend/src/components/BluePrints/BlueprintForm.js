import { useContext, useState } from "react";
import { FormContext } from "../../context/Form";
import "./blueprints.css";

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
        role="button"
        onChange={handleFormChange}
      />
    </>
  );
};

export default BlueprintForm;
