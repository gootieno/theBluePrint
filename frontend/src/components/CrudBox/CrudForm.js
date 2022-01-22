import { useState } from "react";
import { dynamicFetch } from "../../redux/dynamicFetch";

const CrudForm = ({ action, handleInputRef, inputRef, routeObject }) => {
  const [inputAction, setInputAction] = useState("");

  const { name } = routeObject;

  const handleInputAction = (event) => {
    setInputAction(event.target.value);
  };

  const handleInputCancel = () => {
    setInputAction("");
    handleInputRef();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = { method: action, data: { inputAction }, routeObject };
    dynamicFetch({ payload, inputAction });
  };

  const blueprintForm = <></>;

  const defaultForm = (
    <form id="input-field-form" type="submit" onSubmit={handleSubmit}>
      <input id="blueprint-image" type="file" />
      <input
        ref={inputRef}
        id="text-box-input"
        type="text"
        value={inputAction}
        autoComplete="off"
        placeholder={
          action === "edit"
            ? ` ${action.toUpperCase()} ${name.toUpperCase()}`
            : ` ENTER NEW NAME`
        }
        onChange={handleInputAction}
        className={
          inputAction.length > 0
            ? "crud-input crud-actions active"
            : "crud-input crud-actions focus"
        }
      />
      {inputAction.length > 0 && (
        <span
          id="input-action-cancel"
          className="text-inputs-cancel crud-actions"
          onClick={handleInputCancel}
        >
          x
        </span>
      )}
    </form>
  );

  return <div className="crud-actions-input crud-actions">{defaultForm}</div>;
};

export default CrudForm;
