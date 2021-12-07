import { useEffect, useRef, useState } from "react";
import "./crudbox.css";

const CrudBox = ({ route }) => {
  const [routeAction, setRouteAction] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [inputAction, setInputAction] = useState("");
  let inputRef = useRef(null);
  const [action, setAction] = useState(null);

  useEffect(() => {
    if (toggle) handleInputRef();
  }, [toggle, action]);

  const handleRouteAction = (e) => {
    console.log(toggle);
    console.log(inputRef);
    if (`${e.target.id}` === "post" || `${e.target.id}` === "put") {
      if (e.target.id === e.target.name) {
        return;
      }
      setAction(e.target.id);
      setToggle((prev) => !prev);
      setRouteAction(e.target.name);
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
            name="create"
            className="create-button crud-actions"
            onClick={handleRouteAction}
          >
            CREATE
          </div>
          <div
            id="put"
            className="edit-button crud-actions"
            name="edit"
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
