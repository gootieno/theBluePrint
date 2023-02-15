import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { FormContext, formValue } from "../../context/Form";
import { dynamicFetch } from "../../redux/dynamicFetch";
import "./crudbox.css";
import CrudForm from "./CrudForm";
import RouteActions from "./RouteActions";

const CrudBox = ({ routeObject, children }) => {
  const [routeAction, setRouteAction] = useState(null);
  const [toggle, setToggle] = useState(false);
  const inputRef = useRef(null);
  const [action, setAction] = useState("");

  const dispatch = useDispatch();
  const { formValue } = useContext(FormContext);

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
    if (
      !event.target.classList.contains("crud-actions") ||
      event.target.id.includes("delete")
    ) {
      setToggle(false);
    } else {
      setToggle(true);
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
      console.log(event.target.id);
      setToggle(false);
      setRouteAction(event.target.id);
    }
  };

  const handleInputRef = () => {
    inputRef.current.focus();
  };

  const handleDelete = (event) => {
    console.log("toggle ", toggle);
    if (event.target.id === "delete-confirm") {
      event.preventDefault();

      const payload = {
        method: routeAction,
        data: { ...formValue },
        routeObject,
      };

      dispatch(dynamicFetch(payload));
    } else {
      handleRouteAction(event);
    }
  };
  console.log("toggle value ", toggle);

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
            routeObject={routeObject}
          />
        </div>
        {toggle && (
          <CrudForm
            toggle={toggle}
            action={action}
            handleInputRef={handleInputRef}
            inputRef={inputRef}
            routeObject={routeObject}
            dynamicForm={children}
          />
        )}
      </div>
    </div>
  );
};

export default CrudBox;
