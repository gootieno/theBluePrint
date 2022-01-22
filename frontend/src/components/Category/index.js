import React from "react";
import "./category.css";

const Category = ({ categories, handleCategoryTab }) => {
  return categories.map((category, index) => (
    <span
      id='single-category'
      data-id={category.id}
      data-route="categories"
      key={`index-${category.id}-${index}`}
      onClick={handleCategoryTab}
      className="garage-page-links"
      value={category.blueprintId}
      data-name={category.name}
    >
      {category.name}
    </span>
  ));
};
export default Category;
