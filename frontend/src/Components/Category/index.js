import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./category.css";

const Category = ({ category, setCategoryId, blueprint }) => {
  // const categories = useSelector((state) =>
  //   Object.values(state.categories).filter(
  //     (category) => category.blueprintId === blueprint.id
  //   )
  // );

  const handleCategories = (event) => {
    setCategoryId(+event.target.id);
  };

  return (
    <>
      {category ? (
        <span
          id={category.id}
          className="categories"
          onClick={handleCategories}
        >
          {category.name}
        </span>
      ) : (
        <span className="categories">No categories created</span>
      )}
    </>
  );
};

export default Category;
