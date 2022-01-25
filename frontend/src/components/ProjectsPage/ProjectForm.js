import { useContext } from "react";
import { useSelector } from "react-redux";
import { FormContext } from "../../context/Form";

const ProjectForm = () => {
  const { handleFormChange } = useContext(FormContext);

  const categories = useSelector((state) =>
    Object.values(state.garage.categories)
  );
  return (
    <>
      <label id="project-category-title" htmlFor="project-category">
        Add To Category
      </label>
      <select id="project-category" className="crud-actions ">
        {categories &&
          categories.map((category) => (
            <option
              onChange={handleFormChange}
              value={category.id}
              name="foreignKey"
              className="crud-actions"
            >
              {category.name}
            </option>
          ))}
      </select>
    </>
  );
};

export default ProjectForm;
