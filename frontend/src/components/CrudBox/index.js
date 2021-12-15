import { useEffect, useRef, useState } from "react";
import "./crudbox.css";

const CrudBox = ({ route, name }) => {
  const [routeAction, setRouteAction] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [inputAction, setInputAction] = useState("");
  const inputRef = useRef(null);
  const [action, setAction] = useState("");

  useEffect(() => {
    document
      .getElementsByTagName("body")[0]
      .addEventListener("click", handleClickAway);
    if (toggle) handleInputRef();

    return () =>
      document
        .getElementsByTagName("body")[0]
        .removeEventListener("click", handleClickAway);
  }, [toggle, action]);

  const handleClickAway = (event) => {
    if (!event.target.classList.contains("crud-actions")) {
      setToggle(false);
    }
  };

  const handleRouteAction = (event) => {
    if (!route) {
      alert("Nothing selected to work on");
      return null;
    }
    if (event.target.id === "post" || event.target.id === "put") {
      setRouteAction(event.target.id);
      if (event.target.dataset.name === action) {
        setToggle((prev) => !prev);
      } else {
        setAction(event.target.dataset.name);
        setToggle(true);
        setRouteAction(event.target.id);
      }
    } else {
      setToggle(false);
      setRouteAction(event.target.id);
    }
  };

  const handleInputRef = () => {
    inputRef.current.focus();
  };

  const handleInputCancel = () => {
    setInputAction("");
    handleInputRef();
  };

  const handleInputAction = (event) => {
    setInputAction(event.target.value);
  };
  return (
    <div>
      <h2 id="crudbox-title">Work Bench</h2>
      <div id="work-bench-container">
        {route && (
          <h3
            id="work-bench-header"
            className={routeAction === "delete" ? "delete" : ""}
          >
            {routeAction === "delete"
              ? `Delete ${name}?`
              : `Working on ${route[0].toUpperCase() + route.substring(1)}`}
          </h3>
        )}
        <div id="crudbox-container">
          {routeAction === "delete" ? (
            <>
              <div
                id="delete-confirm"
                className="crud-actions delete-buttons crud-action-buttons"
                onClick={handleRouteAction}
              >
                YES
              </div>
              <div
                id="delete-decline"
                className="crud-actions delete-buttons crud-action-buttons"
                onClick={handleRouteAction}
              >
                NO
              </div>
            </>
          ) : (
            <>
              <div
                id="post"
                data-name="create"
                className="create-button crud-actions crud-action-buttons"
                onClick={handleRouteAction}
              >
                CREATE
              </div>
              <div
                id="put"
                className="edit-button crud-actions crud-action-buttons"
                data-name="edit"
                onClick={handleRouteAction}
              >
                EDIT
              </div>
              <div
                id="delete"
                className="delete-button crud-actions crud-action-buttons"
                onClick={handleRouteAction}
                data-name="delete"
              >
                DELETE
              </div>
            </>
          )}{" "}
        </div>
        {toggle && (
          <div className="crud-actions-input crud-actions">
            <input
              ref={inputRef}
              id="text-box-input"
              type="text"
              value={inputAction}
              placeholder={`${action.toUpperCase()} ${route.toUpperCase()}`}
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
          </div>
        )}
      </div>
    </div>
  );
};

export default CrudBox;
