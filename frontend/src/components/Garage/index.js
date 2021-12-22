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

  const handleBluePrint = (event) => {
    handleRoute(event);
    setBluePrint(blueprints[current]);
    history.push(`/blueprints/${blueprints[current].id}/projects`);
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
        <Category
          handleCategoryTab={handleCategoryTab}
          categories={categories}
        />
      </div>
      <div id="garage-container">
        {category && (
          <BluePrintSpecs
            category={category}
            handleRoute={handleRoute}
            specs={specs}
          />
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
        <CrudBox route={route} name={name} />
      </div>
    </>
  );
};

export default Garage;
