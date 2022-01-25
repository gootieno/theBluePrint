import { useContext, useState } from "react";
import { useParams } from "react-router";
import { FormContext } from "../../context/Form";
import { dynamicFetch } from "../../redux/dynamicFetch";

const CrudForm = ({
  action,
  handleInputRef,
  inputRef,
  routeObject,
  dynamicForm,
}) => {
  const { formValue, handleFormChange, setFormValue } = useContext(FormContext);

  const { blueprintId } = useParams();

  const { name } = routeObject;

  const handleInputCancel = () => {
    setFormValue({
      image: "",
      name: "",
      description: "",
    });
    handleInputRef();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      method: action,
      data: { ...formValue },
      blueprintId,
      routeObject,
    };
    dynamicFetch(payload);
  };

  const defaultForm = (
    <form id="input-field-form" type="submit" onSubmit={handleSubmit}>
      {dynamicForm}
      <div>
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
              : "crud-input crud-actions focus"
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
