import { useState } from "react";
import { useHistory } from "react-router-dom";
import BluePrintSpecs from "../BlueprintSpecs";

import Carousel from "../Carousel";
import CrudBox from "../CrudBox";
import "./garage.css";

const Garage = () => {
  const [garageTab, setGarageTab] = useState([
    "Exterior",
    "Interior",
    "Performance",
  ]);
  const [displayInfo, setDisplayInfo] = useState(0);
  const [tab, setTab] = useState(null);

  const history = useHistory();

  const handleBluePrint = () => {
    alert("connect blue prints functionality");
  };

  const handleBuildLists = () => {
    alert("connect routing build list functionality");
  };

  const handleGarageTab = (e) => {
    let index = Number(e.target.id);
    setTab(index);
  };

  return (
    <>
      <h2 id="garage-title">My Garage</h2>
      <div id="garage-page-links-container">
        {garageTab.map((tab, index) => (
          <span
            id={index}
            key={index}
            className="garage-page-links"
            onClick={handleGarageTab}
            value={tab}
          >
            {tab}
          </span>
        ))}
      </div>
      <div id="garage-container">
        <BluePrintSpecs garageTab={garageTab} tab={tab} />
        <Carousel current={displayInfo} setCurrent={setDisplayInfo} />
        <CrudBox />
      </div>
    </>
  );
};

export default Garage;
