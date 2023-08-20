
import { useEffect } from "react";
import { useSelector } from "react-redux";

import "./category.css";

const Category = () => {
  const currentBlueprint = useSelector(
    (state) => state.blueprints.currentBlueprint
  );

  const categories = useSelector((state) =>
    Object.values(state.categories).filter(
      (category) => category && category.blueprintId === currentBlueprint.id
    )
  );


  return (
    <>
      {categories.length ? (
        categories.map((category) => (
          <span id={category.id} key={category.id}>
            {category.name}
          </span>
        ))
      ) : (
        <span className="categories">No categories created</span>
      )}
    </>
  );
};

export default Category;
