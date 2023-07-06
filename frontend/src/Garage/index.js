import { useParams } from "react-router-dom";

const Garage = () => {
  const { garageId } = useParams();
  return <div>Viewing Garage {garageId}</div>;
};

export default Garage;
