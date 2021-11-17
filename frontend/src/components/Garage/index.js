import { useState } from "react";
import { useHistory } from "react-router-dom";
import BluePrintSpecs from "../BlueprintSpecs";

import Carousel from "../Carousel";
import CrudBox from "../CrudBox";
import "./garage.css";

const Garage = () => {
  const [garageTab, setGarageTab] = useState([
    { exterior: ["E7 Carbon Fiber Hood", "Te37s", "Halo HIDs"] },
    { interior: [] },
    { performance: [] },
  ]);

  const [specCategory, setSpecCategory] = useState({
    exterior: [
      { id: 1, title: "Exterior", name: "E7 Carbon Fiber Hood" },
      { id: 2, title: "Exterior", name: "TE37s" },
      { id: 3, title: "Exterior", name: "Halo HIDs" },
    ],

    interior: [
      { id: 1, title: "Interior", name: "Braum Seats" },
      { id: 2, title: "Interior", name: "Naruto Shift Knob" },
    ],

    performance: [
      { id: 1, title: "Performance", name: "B3 Exhause" },
      { id: 2, title: "Performance", name: "K&N Intake" },
    ],
  });

  const [displayInfo, setDisplayInfo] = useState(0);
  const [tab, setTab] = useState(null);

  const history = useHistory();

  const specCategoryArray = Object.values(specCategory);
  const specsTitlesArray = Object.keys(specCategory);

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
        {specsTitlesArray.map((tab, index) => (
          <span
            id={index}
            key={index}
            className="garage-page-links"
            onClick={handleGarageTab}
            value={tab[0].id}
          >
            {tab}
          </span>
        ))}
      </div>
      <div id="garage-container">
        <BluePrintSpecs
          garageTab={garageTab}
          tab={tab}
          specCategoryArray={specCategoryArray}
        />
        <Carousel current={displayInfo} setCurrent={setDisplayInfo} />
        <CrudBox />
      </div>
    </>
  );
};

export default Garage;
