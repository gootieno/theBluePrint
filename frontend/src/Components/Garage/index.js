import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGarage } from "../../redux/garage";
import Category from "../Category";

import "./garage.css";
import Spec from "../Spec";
import Blueprint from "../Blueprint";
import Carousel from "../Carousel";
import WorkBench from "../Workbench";
import { setCurrentBlueprint } from "../../redux/actions/blueprintActions";

const Garage = () => {
  const { garageId } = useParams();
  const [categoryId, setCategoryId] = useState(1);
  const [category, setCategory] = useState(null);
  const [specs, setSpecs] = useState(null);

  const garage = useSelector((state) => state.garage);
  const blueprints = useSelector((state) => Object.values(state.blueprints));
  const blueprint = useSelector((state) => state.blueprints.currentBlueprint);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGarage(garageId));
  }, [dispatch, garageId]);

  const handleCategories = (event) => {
    setCategoryId(+event.target.id);
  };

  const handleScroll = (event) => {
    event.currentTarget.className === "scroll-hidden"
      ? (event.currentTarget.className = "scroll-visible")
      : (event.currentTarget.className = "scroll-hidden");
  };

  const handleCarouselItems = (currentBlueprint) => {
    console.log("blueprint ", blueprint);
    dispatch(setCurrentBlueprint(currentBlueprint));
  };
  return (
    <div id="garage-container">
      <div id="garage-heading-navigation-container">
        <h1 id="garage-heading" className="garage-items">
          {garage.name}
        </h1>
        <div id="projects-navigation-container">
          <h2 id="projects-navigation">Projects</h2>
        </div>
      </div>
      <section id="garage-categories-container">
        {blueprint && (
          <Category blueprint={blueprint} handleCategories={handleCategories} />
        )}
      </section>
      <main id="main-garage-container">
        <section
          id="garage-specs-container"
          className="scroll-hidden"
          onMouseEnter={handleScroll}
          onMouseLeave={handleScroll}
        >
          {categoryId && <Spec categoryId={categoryId} />}
        </section>
        <div id="garage-blueprints-container">
          <Carousel items={blueprints} handleItems={handleCarouselItems}>
            {blueprint && <Blueprint blueprint={blueprint} />}
          </Carousel>
        </div>
        <section id="garage-work-bench-container">
          <WorkBench />
        </section>
      </main>
    </div>
  );
};

export default Garage;
