import { useEffect, useRef, useState } from "react";
import "./crudbox.css";

const CrudBox = ({ route, name }) => {
  const [routeAction, setRouteAction] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [inputAction, setInputAction] = useState("");
  let inputRef = useRef(null);
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

  const handleClickAway = (e) => {
    if (e.target.id !== "post" && e.target.id !== "put") setToggle(false);
  };

  const handleRouteAction = (e) => {
    if (!route) {
      alert("Nothing selected to work on");
      return null;
    }
    if (e.target.id === "post" || e.target.id === "put") {
      setRouteAction(e.target.id);
      if (e.target.dataset.name === action) {
        setToggle((prev) => !prev);
      } else {
        setAction(e.target.dataset.name);
        setToggle(true);
        setRouteAction(e.target.id);
      }
    } else {
      setToggle(false);
      setRouteAction(e.target.id);
    }
  };

  const handleInputRef = () => {
    inputRef.current.focus();
  };

  const handleInputAction = (e) => {
    setInputAction(e.target.value);
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
                className="crud-actions delete-buttons"
                onClick={handleRouteAction}
              >
                YES
              </div>
              <div
                id="delete-decline"
                className="crud-actions delete-buttons"
                onClick={handleRouteAction}
              >
                NO
              </div>
            </>
          ) : (
            <>
              {" "}
              <div
                id="post"
                data-name="create"
                className="create-button crud-actions"
                onClick={handleRouteAction}
              >
                CREATE
              </div>
              <div
                id="put"
                className="edit-button crud-actions"
                data-name="edit"
                onClick={handleRouteAction}
              >
                EDIT
              </div>
              <div
                id="delete"
                className="delete-button crud-actions"
                onClick={handleRouteAction}
                data-name="delete"
              >
                DELETE
              </div>
            </>
          )}{" "}
        </div>
        {toggle && (
          <div className="crud-actions-input">
            <input
              ref={inputRef}
              id="text-box-input"
              type="text"
              value={inputAction}
              placeholder={`${action.toUpperCase()} ${route.toUpperCase()}`}
              onChange={handleInputAction}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CrudBox;
