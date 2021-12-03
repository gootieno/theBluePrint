import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import BluePrintSpecs from "../BlueprintSpecs";

import Carousel from "../Carousel";
import CrudBox from "../CrudBox";
import "./garage.css";

const Garage = () => {
  const [categoryIndex, setCategoryId] = useState(null);
  const [category, setCategory] = useState(null);
  const [blueprint, setBluePrint] = useState(null);
  const [current, setCurrent] = useState(0);

  const garage = useSelector((state) => state.garage);

  const blueprints = Object.values(garage.blueprints);
  const categories = Object.values(garage.categories);
  const specs = Object.values(garage.specs);

  const handleCategoryTab = (e) => {
    setCategoryId(Number(e.target.id));
    setCategory(garage.categories[e.target.id]);
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
            value={index}
            name={category.name}
          >
            {category.name}
          </span>
        ))}
      </div>
      <div id="garage-container">
        {category && (
          <BluePrintSpecs
            blueprint={blueprint}
            specs={specs}
            categoryIndex={categoryIndex}
            category={category}
          />
        )}
        <Carousel
          current={current}
          blueprints={blueprints}
          setCurrent={setCurrent}
        />
        <CrudBox />
      </div>
    </>
  );
};

export default Garage;
