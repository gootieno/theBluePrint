import { useContext, useState } from "react";
import { FormContext } from "../../context/Form";

const StepsForm = () => {
  const { formValue, handleFormChange } = useContext(FormContext);

  return (
    <>
      <input
        type="text"
        name="title"
        placeholder="Enter Step Title"
        value={formValue.title}
        onChange={handleFormChange}
      />
      <input
        type="textarea"
        name="description"
        value={formValue.description}
        onChange={handleFormChange}
      />
      <input
        type="file"
        value={formValue.media}
        onChange={handleFormChange}
        name="media"
      />
      <button>Add Step</button>
      <button type="submit">Finished</button>
    </>
  );
};

export default StepsForm;
