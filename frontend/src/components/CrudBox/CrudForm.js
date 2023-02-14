import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { FormContext } from "../../context/Form";
import { dynamicFetch } from "../../redux/dynamicFetch";
import { addCategory, addBluePrint } from "../../redux/garage";

const CrudForm = ({
  action,
  handleInputRef,
  inputRef,
  routeObject,
  dynamicForm,
}) => {
  const { formValue, handleFormChange, setFormValue } = useContext(FormContext);

  const dispatch = useDispatch();

  const { name } = routeObject;

  const handleInputCancel = () => {
    setFormValue({
      image: "",
      name: "",
      description: "",
    });
    handleInputRef();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      method: action,
      data: { ...formValue },
      routeObject,
    };

    console.log("payload ", payload);
    const responseBody = await dynamicFetch(payload);

    switch (routeObject.route) {
      case "categories":
        if (action === "create") {
          const { category } = responseBody;
          return dispatch(addCategory(category));
        } else if (action === "edit") {
          break;
        } else if (action === "delete") {
          break;
        }

      case "blueprints":
        if (action === "create") {
          const { blueprint } = responseBody;
          dispatch(addBluePrint(blueprint));
        } else if (action === "edit") {
          break;
        } else if (action === "delete") {
          break;
        }
    }
  };

  const defaultForm = (
    <form
      id="input-field-form"
      type="submit"
      onSubmit={handleSubmit}
      className="crud-actions"
    >
      {dynamicForm}
      <div className="crud-actions">
        <input
          ref={inputRef}
          id="text-box-input"
          type="text"
          name="name"
          value={formValue.name}
          autoComplete="off"
          placeholder={
            action === "edit"
              ? ` ${action.toUpperCase()} ${name.toUpperCase()}`
              : ` ENTER NEW NAME`
          }
          onChange={handleFormChange}
          className={
            formValue.name
              ? "crud-input crud-actions active"
              : "crud-input crud-actions"
          }
        />
        {formValue.name && (
          <span
            id="input-action-cancel"
            className="text-inputs-cancel crud-actions"
            onClick={handleInputCancel}
          >
            x
          </span>
        )}
      </div>
    </form>
  );

  return <div className="crud-actions-input crud-actions">{defaultForm}</div>;
};

export default CrudForm;
