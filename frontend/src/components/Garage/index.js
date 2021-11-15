import { useState } from "react";
import { useHistory } from "react-router-dom";
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
      <div>garage page</div>g
    </div>
  );
};

export default Garage;
