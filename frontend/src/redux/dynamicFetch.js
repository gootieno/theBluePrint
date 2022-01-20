import { csrfFetch } from "./csrf";

export const dynamicFetch = async ({ payload }) => {
  const { routeObject, data, method } = payload;
  const { route, id } = routeObject;

  if (method === "create") {
    const response = await csrfFetch(`/api/${route}`, {
      method: "POST",
      contentType: "application/json",
      body: JSON.stringify(data),
    });
  } else if (method === "edit" && id) {
    const response = await csrfFetch(`/api/${route}/${id}`, {
      method: "PUT",
      contentType: "application/json",
      body: JSON.stringify(data),
    });
  } else if (method === "delete" && id) {
    const response = await csrfFetch(`/api/${route}/${id}`, {
      method: "DELETE",
      contentType: "application/json",
      body: JSON.stringify(data),
    });
  } else {
    console.log("does this look right? ", `fetching to /api/${route}/${id}`);
  }
};
