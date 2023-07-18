import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGarage } from "../../redux/garage";
import Category from "../Category";

import "./garage.css";
import Spec from "../Spec";
import Blueprint from "../Blueprint";
import Carousel from "../Carousel";

const Garage = () => {
  const { garageId } = useParams();
  const [current, setCurrent] = useState(0);
  const [blueprint, setBlueprint] = useState(null);
  const [categoryId, setCategoryId] = useState(1);

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
      <main id="garage-blueprints-container">
        <Carousel current={current} setCurrent={setCurrent} items={blueprints}>
          {blueprint && <Blueprint blueprint={blueprint} />}
        </Carousel>
      </main>
      <section id="garage-specs-container">
        {categoryId && <Spec categoryId={categoryId} />}
      </section>
      <section id="garage-crud-box-container">crudbox</section>
    </div>
  );
};

export default Garage;
