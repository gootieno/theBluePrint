import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGarage } from "../redux/garage";

const Garage = () => {
  const { garageId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGarage(garageId));
  }, [garageId]);

  return <div>Viewing Garage {garageId}</div>;
};

export default Garage;
