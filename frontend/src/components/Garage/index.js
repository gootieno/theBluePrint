import { useState } from "react";
import { useHistory } from "react-router-dom";

import Carousel from "../Carousel";
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
    <div id="garage-container">
      <h2 id="garage-title">My Garage</h2>
      <Carousel />
    </div>
  );
};

export default Garage;
