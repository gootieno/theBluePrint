import { addCategory } from "./garage";
import { addBluePrint } from "./garage";

const createFormData = (data, id) => {
  let formData = new FormData();
  formData.append("id", id);
  for (const key in data) {
    const value = data[key];
    if (data[key]) {
      formData.append(`${key}`, `${value}`);
    }
  }

  return formData;
};

const dispatchToStore = (responseData, dispatch, routeAction, route) => {
  switch (route) {
    case "categories":
      if (routeAction === "create") {
        const { category } = responseData;
        return dispatch(addCategory(category));
      } else if (routeAction === "edit") {
        break;
      } else if (routeAction === "delete") {
        break;
      }
      break;
    case "blueprints":
      if (routeAction === "create") {
        const { blueprint } = responseData;
        dispatch(addBluePrint(blueprint));
      } else if (routeAction === "edit") {
        break;
      } else if (routeAction === "delete") {
        break;
      }

    default:
      return null;
  }
};

const sendRequest =
  ({ method, formData, route, id }) =>
  async (dispatch) => {
    let response;
    switch (method) {
      case "create":
        response = await fetch(`/api/${route}`, {
          method: "POST",
          contentType: "multipart/form-data",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          dispatchToStore(data, dispatch, method, route);
          return data;
        }
        break;
      case "edit" || "delete":
        response = await fetch(`/api/${route}/${id}`, {
          method: method === "edit" ? "PUT" : "DELETE",
          contentType: "multipart/form-data",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          dispatchToStore(data, dispatch, method, route);
          return data;
        }
        break;
      default:
        // handle get requests
        return null;
    }
  };

export const dynamicFetch = (payload) => {
  const {
    routeObject: { route, id, associationId },
    data,
    method,
  } = payload;

  let formData = createFormData(data, id);

  const responseData = sendRequest({
    method,
    formData,
    route,
    id,
    associationId,
  });

  console.log("responnse data ", responseData);
  if (responseData) return responseData;
};
