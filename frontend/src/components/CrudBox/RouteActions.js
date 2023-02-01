import { useEffect, useState } from "react";

const RouteActions = ({
  handleRouteAction,
  routeAction,
  handleDelete,
  routeObject,
}) => {
  const { name, route } = routeObject;
  return (
    <>
      {routeAction === "delete" ? (
        <>
          <button
            id="delete-confirm"
            className="crud-actions delete-buttons crud-action-buttons"
            onClick={handleDelete}
          >
            YES
          </button>
          <button
            id="delete-decline"
            className="crud-actions delete-buttons crud-action-buttons"
            onClick={handleDelete}
          >
            NO
          </button>
        </>
      ) : (
        <>
          <button
            id="post"
            data-name="create"
            className="create-button crud-actions crud-action-buttons"
            onClick={handleRouteAction}
            disabled={route === "garage"}
          >
            CREATE
          </button>
          <button
            id="put"
            className="edit-button crud-actions crud-action-buttons"
            data-name="edit"
            onClick={handleRouteAction}
            disabled={!name.length}
          >
            EDIT
          </button>
          <button
            id="delete"
            className="delete-button crud-actions crud-action-buttons"
            onClick={handleRouteAction}
            data-name="delete"
            disabled={!name.length || route === "garage"}
          >
            DELETE
          </button>
        </>
      )}
    </>
  );
};

export default RouteActions;
