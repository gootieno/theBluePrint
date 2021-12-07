import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import BluePrintSpecs from "../BlueprintSpecs";

import Carousel from "../Carousel";
import CrudBox from "../CrudBox";
import "./garage.css";

const Garage = () => {
  const [category, setCategory] = useState(null);
  let [blueprint, setBluePrint] = useState(null);
  const [current, setCurrent] = useState(0);

  const [route, setRoute] = useState(null);

  let garage = useSelector((state) => state.garage);

  let blueprints = Object.values(garage.blueprints);
  let categories = Object.values(garage.categories);

  let currentRoute;

  useEffect(() => {
    setBluePrint(blueprints[current]);
  }, [current]);

  const handleCategoryTab = (e) => {
    let singleCategory = garage.categories[e.target.id];
    currentRoute = e.target.dataset.route;
    setRoute(currentRoute);
    setBluePrint(blueprints[current]);
    setCategory(garage.categories[singleCategory.id]);
  };

  let handleRoute = (e) => {
    currentRoute = e.target.dataset.route;
    setRoute(currentRoute);
  };

  if (!garage) return null;
  return (
    <>
      <h2 id="garage-title">{garage.name}</h2>
      <div id="garage-page-links-container">
        {categories.map((category, index) => (
          <span
            id={category.id}
            data-route="categories"
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
          <BluePrintSpecs
            setRoute={setRoute}
            blueprint={blueprint}
            category={category}
            handleRoute={handleRoute}
          />
        )}
        <Carousel
          current={current}
          blueprints={blueprints}
          setCurrent={setCurrent}
          blueprint={blueprint}
          setRoute={setRoute}
          handleRoute={handleRoute}
        />
        <CrudBox route={route} />
      </div>
    </>
  );
};

export default Garage;
