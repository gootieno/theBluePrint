import { useSelector } from "react-redux";
import "./blueprint-spec.css";

const BluePrintSpecs = ({ specs, category, handleRoute }) => {
  return (
    <div className="specs" id="blueprint-specs">
      <div className="specs" id="exterior-container">
        <h2 id="blueprint-spec-title" className="specs">
          {category.name}
        </h2>
        <div className="specs" id="blueprint-specs-container">
          {specs.length ? (
            specs.map((spec, i) => (
              <div
                className="blueprint-specs"
                data-route="specs"
                id={spec.id}
                key={`${spec.id}-${i}`}
                onClick={handleRoute}
                data-name={spec.name}
              >
                {spec.name}
              </div>
            ))
          ) : (
            <h3 id="specs-empty">Nothing to show</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default BluePrintSpecs;
