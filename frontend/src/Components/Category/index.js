import { useSelector } from "react-redux";
import "./category.css";

const Category = ({ blueprintId, handleCategories }) => {
  const categories = useSelector((state) =>
    Object.values(state.categories).filter(
      (category) => category.blueprintId === blueprintId
    )
  );

  console.log("categories ", categories);
  return (
    <div id="categories-container">
      {categories &&
        categories.map((category) => (
          <span
            id={category.id}
            className="categories"
            onClick={handleCategories}
          >
            {category.name}
          </span>
        ))}
    </div>
  );
};

export default Category;
