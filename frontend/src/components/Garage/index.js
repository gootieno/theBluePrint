import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import BluePrintSpecs from "../BlueprintSpecs";

import Carousel from "../Carousel";
import CrudBox from "../CrudBox";
import "./garage.css";

const Garage = () => {
  const [category, setCategory] = useState(null);
  let [blueprint, setBluePrint] = useState(null);
  const [current, setCurrent] = useState(0);

  let garage = useSelector((state) => state.garage);

  let blueprints = Object.values(garage.blueprints);
  let categories = Object.values(garage.categories);

  useEffect(() => {
    setBluePrint(blueprints[current]);
  }, [current]);

  const handleCategoryTab = (e) => {
    let singleCategory = garage.categories[e.target.id];
    setBluePrint(blueprints[current]);
    setCategory(garage.categories[singleCategory.id]);
  };

  if (!garage) return null;
  return (
    <>
      <h2 id="garage-title">{garage.name}</h2>
      <div id="garage-page-links-container">
        {categories.map((category, index) => (
          <span
            id={category.id}
            key={`index-${category.id}-${index}`}
            onClick={handleCategoryTab}
            className="garage-page-links"
            value={category.blueprintId}
            name={category.name}
          >
            {category.name}
          </span>
        ))}
      </div>
      <div id="garage-container">
        {category && (
          <BluePrintSpecs blueprint={blueprint} category={category} />
        )}
        <Carousel
          current={current}
          blueprints={blueprints}
          setCurrent={setCurrent}
          blueprint={blueprint}
        />
        <CrudBox />
      </div>
    </>
  );
};

export default Garage;
