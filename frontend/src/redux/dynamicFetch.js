import { csrfFetch } from "./csrf";

export const dynamicFetch = async ({ payload }) => {
  const {
    routeObject: { route, id },
    data,
    method,
  } = payload;

  if (method === "create") {
    const response = await csrfFetch(`/api/${route}`, {
      method: "POST",
      contentType: "application/json",
      body: JSON.stringify(data),
    });
    if (response.ok) return { route, response };
  } else if (method === "edit" && id) {
    const response = await csrfFetch(`/api/${route}/${id}`, {
      method: "PUT",
      contentType: "application/json",
      body: JSON.stringify(data),
    });
    if (response.ok) return { route, response };
  } else if (method === "delete" && id) {
    const response = await csrfFetch(`/api/${route}/${id}`, {
      method: "DELETE",
      contentType: "application/json",
      body: JSON.stringify(data),
    });
    if (response.ok) return { route, response };
  } else {
    console.log("does this look right? ", `fetching to /api/${route}/${id}`);
  }
};
