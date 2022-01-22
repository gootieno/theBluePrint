import { useEffect, useRef, useState } from "react";
import { dynamicFetch } from "../../redux/dynamicFetch";
import "./crudbox.css";
import CrudForm from "./CrudForm";
import RouteActions from "./RouteActions";

const CrudBox = ({ routeObject }) => {
  const [routeAction, setRouteAction] = useState(null);
  const [toggle, setToggle] = useState(false);
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
    if (event.target.id === "post" || event.target.id === "put") {
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

  const handleDelete = (event) => {
    if (event.target.id === "delete-confirm") {
      event.preventDefault();
    } else {
      handleRouteAction(event);
    }
  };

  if (!routeObject) return null;
  const { route, name } = routeObject;
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
          <RouteActions
            handleRouteAction={handleRouteAction}
            routeAction={routeAction}
            handleDelete={handleDelete}
          />
        </div>
        {toggle && (
          <CrudForm
            action={action}
            handleInputRef={handleInputRef}
            inputRef={inputRef}
            routeObject={routeObject}
          />
        )}
      </div>
    </div>
  );
};

export default CrudBox;
