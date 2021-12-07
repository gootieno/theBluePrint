import { useSelector } from "react-redux";
import "./blueprint-spec.css";

const BluePrintSpecs = ({ blueprint, category, handleRoute }) => {
  const specs = useSelector((state) => {
    return Object.values(state.garage.specs).filter((spec) => {
      if (
        category.blueprintId === blueprint.id &&
        spec.categoryId === category.id
      ) {
        return spec;
      }
    });
  });
  return (
    <div className="specs" id="blueprint-specs">
      <div className="specs" id="exterior-container">
        <h3 id="blueprint-title" className="specs">
          {category.name}
        </h3>
        <div className="specs" id="blueprint-specs-container">
          {specs.map((spec, i) => (
            <div
              className="blueprint-specs"
              data-route="specs"
              id={spec.id}
              key={`${spec.id}-${i}`}
              onClick={handleRoute}
            >
              {spec.name}
            </div>
          ))}
          <div className="specs" id="blueprint-buildlist-redirect">
            go to buildlist
          </div>
        </div>
      </div>
    </div>
  );
};

export default BluePrintSpecs;
