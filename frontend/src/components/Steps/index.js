import { useState } from "react";
import StepsForm from "./StepsForm";
import "./steps.css";

const Steps = () => {
  const [steps, setSteps] = useState([]);

  const handleAddStep = (e) => {
    e.preventDefault();
    setSteps([...steps, "hard coded step"]);
  };

  return (
    <div id="step-main-container">
      <h2 id="steps-heading">Create Project Steps</h2>
      <StepsForm steps={steps} handleAddStep={handleAddStep} />
      {steps.length ? (
        <div id="steps-card-container">
          {steps.map((step) => (
            <div id="step-card">
              <div className="step-card-content">
                <h3 id="step-title" className="step-card-content">
                  Layout Tools
                </h3>
                <ul
                  id="step-instruction-container"
                  className="step-card-content"
                >
                  <li id="step-instruction" className="step-card-content">
                    {step}
                  </li>
                </ul>
                <button id="step-delete-button" className="step-card-content">
                  DELETE
                </button>
                <button
                  id="step-add-button"
                  className="step-add-button step-card-content"
                >
                  ADD STEP
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Steps;
