import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentCategory } from "../../redux/actions/categoryActions";
import "./category.css";

const Category = ({ blueprint }) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const blueprintCategories = useSelector((state) => state.categories);

  useEffect(() => {
    const filteredCategories = [];
    for (const categoryKey in blueprintCategories) {
      if (
        categoryKey !== "currentCategory" &&
        blueprintCategories[categoryKey].blueprintId === blueprint.id
      ) {
        filteredCategories.push(blueprintCategories[categoryKey]);
      }
    }

    console.log("filtered categories ", filteredCategories[0]);
    setCategories(filteredCategories);
  }, [blueprint, blueprintCategories]);

  const handleCategories = (categoryId) => {
    console.log(categoryId);
    const selectedCategory = categories.find(
      (category) => category.id === categoryId
    );
    console.log(selectedCategory);
    if (selectedCategory) {
      dispatch(setCurrentCategory(selectedCategory));
    }
  };

  return (
    <div id="categories-container">
      {categories.length ? (
        categories.map((category) => (
          <span
            key={category.id}
            className="categories"
            onClick={() => handleCategories(category.id)}
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
