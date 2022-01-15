import { useState } from "react";
import { dynamicFetch } from "../../redux/dynamicFetch";

const CrudForm = ({ action, route, handleInputRef, inputRef, name }) => {
  const [inputAction, setInputAction] = useState("");

  const handleInputAction = (event) => {
    setInputAction(event.target.value);
  };

  const handleInputCancel = () => {
    setInputAction("");
    handleInputRef();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = { method: action, url: route, body: inputAction };
    dynamicFetch(payload);
  };

  return (
    <div className="crud-actions-input crud-actions">
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
        <>
          <span
            id="input-action-cancel"
            className="text-inputs-cancel crud-actions"
            onClick={handleInputCancel}
          >
            x
          </span>
          <div
            id="input-field-submit"
            className="crud-actions crud-action-buttons"
            onClick={handleSubmit}
          >
            SUBMIT
          </div>
        </>
      )}
    </div>
  );
};

export default CrudForm;
