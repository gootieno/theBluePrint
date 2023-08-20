import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGarage } from "../../redux/garage";
import { setCurrentBlueprint } from "../../redux/actions/blueprintActions";

import Category from "../Category";

import "./garage.css";
import Spec from "../Spec";
import Blueprint from "../Blueprint";
import Carousel from "../Carousel";
import WorkBench from "../Workbench";

const Garage = () => {
  const { garageId } = useParams();
  const [current, setCurrent] = useState(0);

  const garage = useSelector((state) => state.garage);
  const blueprints = useSelector((state) =>
    Object.entries(state.blueprints).filter(
      ([key, value]) => key !== "currentBlueprint"
    )
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadGarage(garageId));
  }, [dispatch, garageId]);

  useEffect(() => {
    console.log("current ", current);
    dispatch(setCurrentBlueprint(current));
  }, [dispatch, current]);

  const handleScroll = (event) => {
    event.currentTarget.className === "scroll-hidden"
      ? (event.currentTarget.className = "scroll-visible")
      : (event.currentTarget.className = "scroll-hidden");
  };

  return (
    <div id="garage-container">
      <div id="garage-heading-navigation-container">
        <h1 id="garage-heading" className="garage-items">
          {garage.name}
        </h1>
        <div id="projects-navigation-container">
          <h2 id="projects-navigation" onClick={() => navigate("/projects")}>
            Projects
          </h2>
        </div>
      </div>
      <section id="garage-categories-container"></section>
      <main id="main-garage-container">
        <section
          id="garage-specs-container"
          className="scroll-hidden"
          onMouseEnter={handleScroll}
          onMouseLeave={handleScroll}
        ></section>
        <div id="garage-blueprints-container">
          <Carousel
            current={current}
            setCurrent={setCurrent}
            items={blueprints}
          >
            <Blueprint />
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
