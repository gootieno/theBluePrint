import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { RouteContext } from "../../context/Route";

import BluePrintSpecs from "../BlueprintSpecs";
import BlueprintForm from "../BluePrints/BlueprintForm";
import Carousel from "../Carousel";
import Category from "../Category";
import CrudBox from "../CrudBox";

import { getUserBluePrints } from "../../redux/garage";

import "./garage.css";

const Garage = () => {
  const [category, setCategory] = useState(null);
  const [transition, setTransition] = useState(false);

  const [blueprint, setBluePrint] = useState(null);
  const [current, setCurrent] = useState(0);
  const [routeObject, setRouteObject] = useState(null);

  const { route, setRoute } = useContext(RouteContext);

  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  const garage = useSelector((state) => state.garage);
  const categories = useSelector((state) =>
    Object.values(state.garage.categories)
  );
  const blueprints = useSelector((state) =>
    Object.values(state.garage.blueprints)
  );

  const specs = useSelector((state) =>
    Object.values(state.garage.specs).filter((spec) => {
      if (
        categories[0].blueprintId === blueprint?.id &&
        spec?.categoryId === category?.id
      ) {
        return spec;
      }
    })
  );

  useEffect(() => {
    if (user) dispatch(getUserBluePrints(user.id));
    setCategory(categories[0]);
  }, [dispatch, user?.id]);

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
    const singleCategory = garage.categories[event.target.dataset.id];
    handleRoute(event);
    setBluePrint(blueprints[current]);
    setCategory(garage.categories[singleCategory.id]);
    setTransition(true);
  };

  let handleRoute = (event) => {
    currentNode = event.target.dataset;
    setRouteObject({
      ...routeObject,
      id: currentNode.id,
      route: currentNode.route,
      name: currentNode.name,
    });
    setRoute(currentNode.route);
  };

  const handleGarageTitle = (event) => {
    setBluePrint(blueprints[current]);

    if (!category) setCategory(categories[0]);
    handleRoute(event);
    setTransition(true);
  };

  const handleBluePrint = (event) => {
    handleRoute(event);
    if (!category) setCategory(categories[0]);
    setBluePrint(blueprints[current]);
    setTransition(true);
  };

  const handleProjectRoute = () => {
    setRoute("projects");
    history.push(`/blueprints/${blueprints[current].id}/projects`);
    setTransition(false);
  };

  const handleBuildListRoute = () => {
    setTransition(false);
  };

  if (!user) history.push("/");
  if (!garage) return null;
  return (
    <div id="garage-container-outer">
      <div id="garage-container">
        <div id="garage-header-container">
          <div className="garage-links" onClick={handleBuildListRoute}>
            <h2 data-route="buildlist" className="garage-project-navigation">
              {"< BuildList"}
            </h2>
          </div>
          <div id="garage-category-container">
            <h2
              id="garage-title"
              data-route="garage"
              data-id={garage.id}
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
          </div>
          <div className="garage-links" onClick={handleProjectRoute}>
            <h2 className="garage-project-navigation">{"Projects >"}</h2>
          </div>
        </div>
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
            {categories.length && (
              <CrudBox routeObject={routeObject}>
                {route === "blueprints" && <BlueprintForm />}
              </CrudBox>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Garage;
