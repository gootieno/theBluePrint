import { useSelector } from "react-redux";
import "./blueprint-spec.css";

const BluePrintSpecs = ({ blueprint, category }) => {
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
    <div id="blueprint-specs">
      <div id="exterior-container">
        <h3 id="blueprint-title">{category.name}</h3>
        <div id="blueprint-specs-container">
          {specs.map((spec, i) => (
            <div id="blueprint-body" key={`${spec.id}-${i}`}>
              {spec.name}
            </div>
          ))}
          <div id="blueprint-buildlist-redirect">go to buildlist</div>
        </div>
      </div>
    </div>
  );
};

export default BluePrintSpecs;
