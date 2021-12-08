import { useEffect, useRef, useState } from "react";
import "./crudbox.css";

const CrudBox = ({ route }) => {
  const [routeAction, setRouteAction] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [inputAction, setInputAction] = useState("");
  let inputRef = useRef(null);
  const [action, setAction] = useState(null);

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
    if (e.target.id === "post" || e.target.id === "put") {
      if (e.target.id === action) {
        setToggle((prev) => !prev);
      } else {
        setAction(e.target.id);
        setToggle(true);
        setRouteAction(e.target.name);
      }
    } else {
      setToggle(false);
      setRouteAction(e.target.name);
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
      {route && <span> Working on {route}</span>}
      <div id="work-bench-container">
        <div id="crudbox-container">
          <div
            id="post"
            name="post"
            className="create-button crud-actions"
            onClick={handleRouteAction}
          >
            CREATE
          </div>
          <div
            id="put"
            className="edit-button crud-actions"
            name="put"
            onClick={handleRouteAction}
          >
            EDIT
          </div>
          <div
            id="delete"
            className="delete-button crud-actions"
            onClick={handleRouteAction}
            name="delete"
          >
            DELETE
          </div>
        </div>
        {toggle && (
          <div className="crud-actions-input">
            <input
              ref={inputRef}
              id="text-box-input"
              type="text"
              value={inputAction}
              placeholder="Enter changes here"
              onChange={handleInputAction}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CrudBox;
