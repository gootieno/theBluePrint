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

const sendRequest = async ({ method, formData, route, id }) => {
  const methodMapper = {};

  methodMapper["create"] = "POST";
  methodMapper["edit"] = "PUT";
  methodMapper["delete"] = "DELETE";

  console.log("route ", route);

  let response;
  switch (method) {
    case "create":
      console.log("method ", method);
      response = await fetch(`/api/${route}`, {
        method: methodMapper[method],
        contentType: "multipart/form-data",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    case "edit" || "delete":
      console.log("method ", method);

      response = await fetch(`/api/${route}/${id}`, {
        method: methodMapper[method],
        contentType: "multipart/form-data",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    default:
      // handle get requests
      return null;
  }
};

export const dynamicFetch = async (payload) => {
  const {
    routeObject: { route, id },
    data,
    method,
  } = payload;

  let formData = createFormData(data, id);

  const responseData = await sendRequest({ method, formData, route, id });

  console.log("responnse data ", responseData);
  if (responseData) return responseData;
};
