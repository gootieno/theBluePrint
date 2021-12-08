import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import BluePrintSpecs from "../BlueprintSpecs";

import Carousel from "../Carousel";
import CrudBox from "../CrudBox";
import "./garage.css";

const Garage = () => {
  let [category, setCategory] = useState(null);
  let [blueprint, setBluePrint] = useState(null);
  let [name, setName] = useState(null);
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
    handleRoute(e);
    setBluePrint(blueprints[current]);
    setCategory(garage.categories[singleCategory.id]);
  };

  let handleRoute = (e) => {
    currentRoute = e.target.dataset.route;
    setRoute(currentRoute);
    handleName(e);
  };

  let handleName = (e) => {
    setName(e.target.dataset.name);
  };

  const specs = useSelector((state) => {
    return Object.values(state.garage.specs).filter((spec) => {
      if (
        category?.blueprintId === blueprint?.id &&
        spec?.categoryId === category?.id
      ) {
        return spec;
      }
    });
  });

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
            data-name={category.name}
          >
            {category.name}
          </span>
        ))}
      </div>
      <div id="garage-container">
        {category && (
          <BluePrintSpecs
            category={category}
            handleRoute={handleRoute}
            specs={specs}
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
        <CrudBox route={route} category={category} name={name} />
      </div>
    </>
  );
};

export default Garage;
