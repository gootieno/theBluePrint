import "./blueprint-spec.css";

const BluePrintSpecs = ({ specs, category }) => {
  const renderSpecs = specs.filter((spec) => spec.categoryId === category.id);
  return (
    <div id="blueprint-specs">
      <div id="exterior-container">
        <h3 id="blueprint-title">{category.name}</h3>
        <div id="blueprint-specs-container">
          {renderSpecs.map((spec, i) => (
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
