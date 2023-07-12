import { useParams } from "react-router-dom";

const Garage = () => {
  console.log("in the garage page");
  const { garageId } = useParams();
  return <div>Viewing Garage {garageId}</div>;
};

export default Garage;
