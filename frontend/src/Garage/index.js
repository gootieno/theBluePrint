import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGarage } from "../redux/garage";

import "./garage.css";

const Garage = () => {
  const { garageId } = useParams();

  const garage = useSelector((state) => state.garage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGarage(garageId));
  }, [garageId]);

  return (
    <div id="garage-container">
      <h1 id="garage-heading" className="garage-items">
        {garage.name}
      </h1>
      <section id="garage-categories-container">categories</section>
      <main id="garage-blueprints-container">blueprints</main>
      <section id="garage-specs-container">specs</section>
      <section id="garage-crud-box-container">crudbox</section>
    </div>
  );
};

export default Garage;
