import { useSelector } from "react-redux";
import "./blueprint-spec.css";

const BluePrintSpecs = ({ categoryIndex, garageTab, specs, category }) => {
  if (categoryIndex === null) return null;
  // let tabName = garageTab[tab];

  const renderSpecs = () =>
    specs.filter((spec) => spec.categoryId === categoryIndex);
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
