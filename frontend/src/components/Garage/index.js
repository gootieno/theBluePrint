import { useState } from "react";
import { useHistory } from "react-router-dom";
import BluePrintSpecs from "../BlueprintSpecs";

import Carousel from "../Carousel";
import CrudBox from "../CrudBox";
import "./garage.css";

const Garage = () => {
  const [garage, setGarage] = useState([]);

  const history = useHistory();

  const handleBluePrint = () => {
    alert("connect blue prints functionality");
  };

  const handleBuildLists = () => {
    alert("connect routing build list functionality");
  };

  return (
    <>
      <h2 id="garage-title">My Garage</h2>
      <div id="garage-page-links-container">
        <span className="garage-page-links">Exterior</span>
        <span className="garage-page-links">Interior</span>
        <span className="garage-page-links">Performance</span>
      </div>
      <div id="garage-container">
        <BluePrintSpecs />
        <Carousel />
        <CrudBox />
      </div>
    </>
  );
};

export default Garage;
