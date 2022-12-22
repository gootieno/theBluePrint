import { useState, useContext } from "react";
import StepsForm from "./StepsForm";
import { FormContext } from "../../context/Form";
import "./steps.css";

const Steps = () => {
  const [steps, setSteps] = useState([]);

  const { formValue, setFormValue, resetForm } = useContext(FormContext);

  return (
    <div id="step-main-container">
      <h2 id="steps-heading">Create Project Steps</h2>
      <StepsForm
        steps={steps}
        setSteps={setSteps}
        form={formValue}
        setForm={setFormValue}
        resetForm={resetForm}
      />
      {steps.length ? (
        <>
          <h2 id="steps-card-heading">Steps</h2>
          <div id="steps-card-container">
            {steps.map((step, i) => (
              <div id="step-card" key={steps.length + i}>
                <h4>{`Step ${+i + 1}`}</h4>
                <div className="step-card-content">
                  <h3 id="step-card-title" className="step-card-content">
                    {step.title}
                  </h3>
                  <ul
                    id="step-instruction-container"
                    className="step-card-content"
                  >
                    <li id="step-instruction" className="step-card-content">
                      {step.description}
                    </li>
                  </ul>
                  <div id="step-card-button-container">
                    <button
                      id="step-add-button"
                      className="step-buttons step-card-content"
                    >
                      ADD STEP
                    </button>
                    <button
                      id="step-delete-button"
                      className="step-buttons step-card-content"
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Steps;
