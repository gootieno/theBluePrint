import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserBluePrints } from "../../redux/garage";

import BluePrintSpecs from "../BlueprintSpecs";
import Carousel from "../Carousel";
import CrudBox from "../CrudBox";
import "./garage.css";

const Garage = () => {
  const [category, setCategory] = useState(null);
  const [blueprint, setBluePrint] = useState(null);
  const [name, setName] = useState(null);
  const [current, setCurrent] = useState(0);
  const [blueprintOptions, setBlueprintOptions] = useState(false);
  const [route, setRoute] = useState(null);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const garage = useSelector((state) => state.garage);

  useEffect(() => {
    if (user) dispatch(getUserBluePrints(user.id));
    setBluePrint(blueprints[current]);
  }, [dispatch, current, user?.id]);

  const blueprints = Object.values(garage.blueprints);
  const categories = Object.values(garage.categories);

  let currentNode;

  const handleCategoryTab = (event) => {
    let singleCategory = garage.categories[event.target.id];
    handleRoute(event);
    setBluePrint(blueprints[current]);
    setCategory(garage.categories[singleCategory.id]);
  };

  let handleRoute = (event) => {
    currentNode = event.target.dataset;
    setRoute(currentNode.route);
    setName(currentNode.name);
  };

  const handleBluePrint = (event) => {
    handleRoute(event);
    setBlueprintOptions((prevState) => !prevState);
  };

  const specs = useSelector((state) =>
    Object.values(state.garage.specs).filter((spec) => {
      if (
        category?.blueprintId === blueprint?.id &&
        spec?.categoryId === category?.id
      ) {
        return spec;
      }
    })
  );

  if (!garage) return null;
  return (
    <>
      <h2
        id="garage-title"
        data-route="garage"
        data-name={garage.name}
        onClick={handleRoute}
      >
        {garage.name}
      </h2>
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
          handleBluePrint={handleBluePrint}
        />
        <CrudBox route={route} name={name} />
      </div>
    </>
  );
};

export default Garage;
