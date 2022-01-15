import { csrfFetch } from "./csrf";

export const dynamicFetch = async ({ method, url, body }) => {
  if (method === "create") {
    const response = await csrfFetch(`/api/${url}`, {
      method: "POST",
      contentType: "application/json",
      body: JSON.stringify({ name: body, garageId: 1 }),
    });
  }
};
