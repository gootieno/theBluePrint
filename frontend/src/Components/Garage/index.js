import { useState } from "react";
import "./garage.css";

const Garage = () => {
  const [garage, setGarage] = useState([]);

  return (
    <div className="garage-container">
      <div className="blueprint-container">
        <button className="garage-blueprint garage-buttons">BluePrints</button>
      </div>
      <div className="build-list-container">
        <button className="garage-build-list garage-buttons">
          Build Lists
        </button>
      </div>
    </div>
  );
};

export default Garage;
