import { useSelector } from "react-redux";
import "./blueprint.css";

const Blueprint = () => {
  const blueprint = useSelector((state) => state.blueprints.currentBlueprint);


  if (!blueprint) return null;
  return (
    <div id="blueprint-container">
      <img
        id={blueprint.id}
        src={blueprint.imageUrl}
        alt={blueprint.name}
        className="blueprint-images"
      />
    </div>
  );
};

export default Blueprint;
