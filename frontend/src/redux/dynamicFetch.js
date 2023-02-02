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

export const dynamicFetch = async (payload) => {
  const {
    routeObject: { route, id },
    data,
    method,
  } = payload;

  let formData = createFormData(data, id);

  if (method === "create") {
    const response = await fetch(`/api/${route}`, {
      method: "POST",
      contentType: "multipart/form-data",
      body: formData,
    });
    if (response.ok) return { route, response };
  } else if (method === "edit" && id) {
    const response = await fetch(`/api/${route}/${id}`, {
      method: "PUT",
      contentType: "multipart/form-data",
      body: formData,
    });
    if (response.ok) return { route, response };
  } else if (method === "delete" && id) {
    const response = await fetch(`/api/${route}/${id}`, {
      method: "DELETE",
      contentType: "multipart/form-data",
      body: formData,
    });
    if (response.ok) return { route, response };
  } else {
    console.log("does this look right? ", `fetching to /api/${route}/${id}`);
  }
};
