const StepsForm = ({ steps, form, setForm, setSteps, resetForm }) => {
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddStep = (e) => {
    e.preventDefault();
    setSteps([...steps, form]);
    resetForm();
  };

  return (
    <form type="submit" id="steps-form" onSubmit={handleAddStep}>
      <h4 id="step-number">STEP #{steps.length + 1}</h4>
      <div id="form-title-container">
        <label htmlFor="title">Title</label>
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
        <label htmlFor="description" id="description-label">
          What To Do
        </label>
        <textarea
          id="step-description"
          role="input"
          type="text"
          name="description"
          placeholder="How to complete this step"
          value={form.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <div id="steps-media-container">
        <label id="media-label" htmlFor="media">
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
