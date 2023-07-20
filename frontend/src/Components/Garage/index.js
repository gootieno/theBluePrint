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

const Garage = () => {
  const { garageId } = useParams();
  const [current, setCurrent] = useState(0);
  const [blueprint, setBlueprint] = useState(null);
  const [categoryId, setCategoryId] = useState(1);
  const [category, setCategory] = useState(null);

  const garage = useSelector((state) => state.garage);
  const blueprints = useSelector((state) => Object.values(state.blueprints));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGarage(garageId));
  }, [dispatch, garageId]);

  useEffect(() => {
    setBlueprint(blueprints[current]);
  }, [blueprints, current]);

  const handleCategories = (event) => {
    setCategoryId(+event.target.id);
  };

  const handleScroll = (event) => {
    event.currentTarget.className === "scroll-hidden"
      ? (event.currentTarget.className = "scroll-visible")
      : (event.currentTarget.className = "scroll-hidden");
  };

  return (
    <div id="garage-container">
      <h1 id="garage-heading" className="garage-items">
        {garage.name}
      </h1>
      <section id="garage-categories-container">
        {blueprint && (
          <Category
            blueprintId={blueprint.id}
            handleCategories={handleCategories}
          />
        )}
      </section>
      <main id="main-garage-container">
        <section
          id="garage-specs-container"
          className="scroll-hidden"
          onMouseEnter={handleScroll}
          onMouseLeave={handleScroll}
        >
          {categoryId && (
            <Spec categoryId={categoryId} blueprintId={blueprint?.id} />
          )}
        </section>
        <div id="garage-blueprints-container">
          <Carousel
            current={current}
            setCurrent={setCurrent}
            items={blueprints}
          >
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
