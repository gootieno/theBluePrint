import { useContext, useState } from "react";
import { FormContext } from "../../context/Form";

const StepsForm = ({ steps, handleAddStep }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    media: "",
  });
  const { formValue, handleFormChange } = useContext(FormContext);

  console.log("form value ", formValue);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form type="submit" id="steps-form" onSubmit={handleAddStep}>
      <h4 id="step-number">STEP #{steps.length + 1}</h4>
      <div id="form-title-container">
        <label for="title">Title</label>
        <input
          id="step-title"
          type="text"
          name="title"
          placeholder="Name of your step"
          value={form.title}
          onChange={handleChange}
        />
      </div>

      <div id="form-description-container">
        <label id="description-label" for="description">
          What To Do
        </label>
        <span
          id="step-description"
          contentEditable
          role="textbox"
          type="text"
          name="description"
          placeholder="How to complete this step"
          value={form.description}
          onChange={handleChange}
        ></span>
      </div>

      <div id="steps-media-container">
        <label id="media-label" for="media">
          Got Pix?
        </label>
        <input
          id="step-media"
          type="file"
          value={form.media}
          onChange={handleChange}
          name="media"
        />
      </div>
      <button
        id="step-add-button"
        className="step-add-button crud-action-buttons"
        onSubmit={handleAddStep}
        type="submit"
      >
        ADD STEP
      </button>
    </form>
  );
};

export default StepsForm;
