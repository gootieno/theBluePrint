import React from "react";

const RouteActions = ({ handleRouteAction, routeAction, handleDelete }) => {
  return (
    <>
      {routeAction === "delete" ? (
        <>
          <div
            id="delete-confirm"
            className="crud-actions delete-buttons crud-action-buttons"
            onClick={handleDelete}
          >
            YES
          </div>
          <div
            id="delete-decline"
            className="crud-actions delete-buttons crud-action-buttons"
            onClick={handleDelete}
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
      )}
    </>
  );
};

export default RouteActions;
