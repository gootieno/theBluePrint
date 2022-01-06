import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { RouteContext } from "../../context/Route";

import BluePrintSpecs from "../BlueprintSpecs";
import Carousel from "../Carousel";
import Category from "../Category";
import CrudBox from "../CrudBox";
import "./garage.css";

const Garage = () => {
  const [category, setCategory] = useState(null);
  const [blueprint, setBluePrint] = useState(null);
  const [name, setName] = useState(null);
  const [current, setCurrent] = useState(0);
  const [blueprintOptions, setBlueprintOptions] = useState(false);

  const { route, setRoute } = useContext(RouteContext);

  const dispatch = useDispatch();
  const history = useHistory();

  const garage = useSelector((state) => state.garage);

  const blueprints = Object.values(garage.blueprints);
  const categories = Object.values(garage.categories);

  useEffect(() => {
    setBluePrint(blueprints[current]);
  }, [dispatch, current]);

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

  const handleGarageTitle = (event) => {
    setCategory(null);
    handleRoute(event);
  };

  const handleBluePrint = (event) => {
    handleRoute(event);
    setBluePrint(blueprints[current]);
    setBlueprintOptions((prevState) => !prevState);
  };

  const handleProjectRoute = (event) => {
    event.target.id === "options-yes"
      ? history.push(`/blueprints/${blueprints[current].id}/projects`)
      : setBlueprintOptions(false);
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
    <div id="garage-container">
      <h2
        id="garage-title"
        data-route="garage"
        data-name={garage.name}
        onClick={handleGarageTitle}
      >
        {garage.name}
      </h2>
      <div id="garage-page-links-container">
        <Category
          handleCategoryTab={handleCategoryTab}
          categories={categories}
        />
      </div>
      <div id="garage-items">
        {category && (
          <div id="garage-blueprint-specs-container">
            <BluePrintSpecs
              category={category}
              handleRoute={handleRoute}
              specs={specs}
            />
          </div>
        )}
        <div id="garage-carousel-container">
          <Carousel
            current={current}
            setCurrent={setCurrent}
            carouselItems={blueprints}
            handleCarouselItem={handleBluePrint}
            dataRoute="blueprints"
          />
        </div>
        {category && (
          <div id="garage-crud-box-container">
            <CrudBox route={route} name={name} />
          </div>
        )}
      </div>
      {blueprintOptions && (
        <div id="garage-blueprint-project-container">
          <h2 id="blueprint-project-title">Checkout Projects?</h2>
          <div id="blueprint-option-buttons-container">
            <div
              id="options-yes"
              className="crud-action-buttons blueprint-options"
              onClick={handleProjectRoute}
            >
              YES
            </div>
            <div
              id="options-no"
              onClick={handleProjectRoute}
              className="crud-action-buttons blueprint-options"
            >
              NO
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Garage;
