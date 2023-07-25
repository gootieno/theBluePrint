import { useSelector } from "react-redux";
import "./spec.css";

const Spec = ({ categoryId }) => {
  const specs = useSelector((state) =>
    Object.values(state.specs).filter((spec) => spec.categoryId === categoryId)
  );

  return (
    <>
      <h2 id="specs-heading">Specs</h2>
      <div id="spec-container-border"></div>
      <ul id="specs-container">
        {specs.length ? (
          specs.map((spec) => (
            <li id={spec.id} className="specs">
              {spec.name}
            </li>
          ))
        ) : (
          <li className="specs">No specs yet</li>
        )}
      </ul>
    </>
  );
};

export default Spec;
