import { useState } from "react";
import "./crudbox.css";

const CrudBox = ({ route }) => {
  const [routeAction, setRouteAction] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [inputAction, setInputAction] = useState("");

  const handleRouteAction = (e) => {
    if (`${e.target.id}` === "post" || `${e.target.id}` === "put") {
      if (toggle) {
        setToggle(false);
        setRouteAction(e.target.id);
        setToggle(true);
      }
      setToggle(true);
      setRouteAction(e.target.id);
    } else {
      setToggle(false);
      setRouteAction(e.target.id);
    }
  };

  const handleInputAction = (e) => {
    setInputAction(e.target.value);
  };
  return (
    <div>
      <h2 id="crudbox-title">Work Bench</h2>
      {route && <span> Working on {route}</span>}
      <div id="crudbox-container">
        <button id="put" className="edit-button" onClick={handleRouteAction}>
          edit
        </button>

        <button id="post" className="create-button" onClick={handleRouteAction}>
          create
        </button>

        <button
          id="delete"
          className="delete-button"
          onClick={handleRouteAction}
        >
          delete
        </button>

        {toggle && (
          <div id="text-box-container">
            <input
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
