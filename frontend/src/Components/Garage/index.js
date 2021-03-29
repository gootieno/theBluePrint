import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./garage.css";

const Garage = () => {
  const [garage, setGarage] = useState([]);

  const history = useHistory();

  const handleBluePrint = () => {
    history.push("/blueprints");
  };

  const handleBuildLists = () => {
    history.push("/buildlists");
  };

  return (
    <div className="garage-container">
      <div className="blueprint-container">
        <button
          onClick={handleBluePrint}
          className="garage-blueprint garage-buttons"
        >
          BluePrints
        </button>
      </div>
      <div className="build-list-container">
        <button
          onClick={handleBuildLists}
          className="garage-build-list garage-buttons"
        >
          Build Lists
        </button>
      </div>
    </div>
  );
};

export default Garage;
