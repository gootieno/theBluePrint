import { useState } from "react";

const StepsForm = ({ setShowStepForm }) => {
  const [stepForm, setStepForm] = useState({
    title: "",
    description: "",
    media: null,
  });

  const handleStepForm = (event) => {
    setStepForm({ ...stepForm, [event.target.name]: event.target.value });
  };

  return (
    <form id="step-form">
      <input
        type="text"
        placeholder="Enter Step Title"
        value={stepForm.title}
      />
      <input type="textarea" value={stepForm.description} />
      <input type="file" value={stepForm.media} />
      <button>Add Step</button>
      <button onClick={setShowStepForm} type="submit">
        Finished
      </button>
    </form>
  );
};

export default StepsForm;
