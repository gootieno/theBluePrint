import "./blueprint-spec.css";

const BluePrintSpecs = ({ specs, category, handleRoute }) => {
  return (
    <div className="specs" id="blueprint-specs-container">
      <h2 id="blueprint-spec-title" className="specs">
        {category.name}
      </h2>
      <div className="specs-list">
        <div className="spec-item" id="blueprint-spec-item-container">
          {specs.length ? (
            specs.map((spec, i) => (
              <div
                className="blueprint-specs"
                data-route="specs"
                data-id={spec.id}
                id={spec.id}
                key={`spec-${spec.id}-${i}`}
                onClick={handleRoute}
                data-name={spec.name}
                data-association-id={category.id}
              >
                {spec.name}
              </div>
            ))
          ) : (
            <div id="specs-empty" className="blueprint-specs">
              Nothing to show
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BluePrintSpecs;
