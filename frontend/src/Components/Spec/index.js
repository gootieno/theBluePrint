import { useSelector } from "react-redux";

const Spec = ({ categoryId }) => {
  const specs = useSelector((state) =>
    Object.values(state.specs).filter((spec) => spec.categoryId === categoryId)
  );
  return (
    <div id="specs-container">
      {specs &&
        specs.map((spec) => (
          <span id={spec.id} className="specs">
            {spec.name}
          </span>
        ))}
    </div>
  );
};

export default Spec;
