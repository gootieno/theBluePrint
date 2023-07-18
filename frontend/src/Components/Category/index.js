import { useSelector } from "react-redux";
import "./category.css";

const Category = ({ blueprintId, handleCategories }) => {
  const categories = useSelector((state) =>
    Object.values(state.categories).filter(
      (category) => category.blueprintId === blueprintId
    )
  );

  return (
    <div id="categories-container">
      {categories.length ? (
        categories.map((category) => (
          <span
            id={category.id}
            className="categories"
            onClick={handleCategories}
          >
            {category.name}
          </span>
        ))
      ) : (
        <span className="categories">No categories created</span>
      )}
    </div>
  );
};

export default Category;
