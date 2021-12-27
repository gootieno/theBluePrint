import { useState } from "react";

const CrudForm = ({ action, route, handleInputRef, inputRef }) => {
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
    console
      .log
      // `fetch to ${route} route with this data: ${inputAction} with ${routeAction} in the headers`
      ();
  };

  return (
    <div className="crud-actions-input crud-actions">
      <input
        ref={inputRef}
        id="text-box-input"
        type="text"
        value={inputAction}
        autoComplete="off"
        placeholder={`${action.toUpperCase()} ${route.toUpperCase()}`}
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
