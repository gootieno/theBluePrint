import { useState } from "react";
import StepsForm from "./StepsForm";
import "./steps.css";

const Steps = () => {
  const [steps, setSteps] = useState([]);
  const handleAddStep = (e) => {
    setSteps([...steps, "hard coded step"]);
  };

  return (
    <div id="step-container">
      <h2 id="steps-heading">Create Project Step</h2>
      <div id="steps-form-container">
        <StepsForm />
        <button onClick={handleAddStep}>Add Step</button>
      </div>
      {steps.length ? (
        <div id="steps">
          {steps.map((step) => (
            <div id="steps-card">
              <span id="steps-content">{step}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Steps;
