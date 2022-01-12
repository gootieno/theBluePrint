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
  const garage = useSelector((state) => state.garage);

  const blueprints = Object.values(garage.blueprints);
  const categories = Object.values(garage.categories);

  const [category, setCategory] = useState(categories[0]);
  const [transition, setTransition] = useState(false);

  const [blueprint, setBluePrint] = useState(null);
  const [name, setName] = useState(null);
  const [current, setCurrent] = useState(0);
  const [blueprintOptions, setBlueprintOptions] = useState(false);

  const { route, setRoute } = useContext(RouteContext);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setBluePrint(blueprints[current]);
  }, [dispatch, current]);

  useEffect(() => {
    let garageItems;
    if (transition) {
      garageItems = document.getElementById("garage-items-inner");
      garageItems.classList.add("active");
    }
    if (garageItems) return () => garageItems.classList.remove("active");
  }, [transition]);

  let currentNode;

  const handleCategoryTab = (event) => {
    let singleCategory = garage.categories[event.target.id];
    handleRoute(event);
    setBluePrint(blueprints[current]);
    setCategory(garage.categories[singleCategory.id]);
    setTransition(true);
  };

  let handleRoute = (event) => {
    currentNode = event.target.dataset;
    setRoute(currentNode.route);
    setName(currentNode.name);
  };

  const handleGarageTitle = (event) => {
    setTransition(false);
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
      <div id="garage-projects-navigation-container">
        <h2 id="garage-project-navigation">{"Projects >"}</h2>
      </div>
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
      <div id="garage-items-outer" className="garage-items">
        <div id="garage-items-inner" className="garage-items">
          <div className="card" />
          <div id="garage-blueprint-specs-container">
            {category && (
              <BluePrintSpecs
                category={category}
                handleRoute={handleRoute}
                specs={specs}
              />
            )}
          </div>
          <div id="garage-carousel-container">
            <Carousel
              current={current}
              setCurrent={setCurrent}
              carouselItems={blueprints}
              handleCarouselItem={handleBluePrint}
              dataRoute="blueprints"
            />
          </div>
          <div id="garage-crud-box-container">
            {category && <CrudBox route={route} name={name} />}
          </div>
        </div>
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
