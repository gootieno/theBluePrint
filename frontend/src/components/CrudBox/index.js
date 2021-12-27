import { useEffect, useRef, useState } from "react";
import "./crudbox.css";
import CrudForm from "./CrudForm";
import RouteActions from "./RouteActions";

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
      // console.log(`fetch to ${route} route and delete ${name}`);
    } else {
      handleRouteAction(event);
    }
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
          <RouteActions
            handleRouteAction={handleRouteAction}
            routeAction={routeAction}
            handleDelete={handleDelete}
          />
        </div>
        {toggle && (
          <CrudForm
            action={action}
            route={route}
            toggle={toggle}
            handleInputRef={handleInputRef}
            inputRef={inputRef}
          />
        )}
      </div>
    </div>
  );
};

export default CrudBox;
