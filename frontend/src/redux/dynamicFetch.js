export const dynamicFetch = async (payload) => {
  const {
    routeObject: { route, id },
    data,
    method,
  } = payload;

  if (method === "create") {
    let { media, name } = data;
    if (media) {
      const formData = new FormData();
      formData.append("media", media);
      formData.append("name", name ? name : "");

      for (const key of formData.entries()) {
        console.log("form data", key);
      }
      const response = await fetch(`/api/${route}`, {
        "Content-Type": "multipart/form-data",
        method: "POST",
        body: formData,
      });

      if (response.ok) return { route, response };
    } else {
      const response = await fetch(`/api/${route}`, {
        method: "POST",
        contentType: "application/json",
        body: JSON.stringify(data),
      });
      if (response.ok) return { route, response };
    }
  } else if (method === "edit" && id) {
    const response = await fetch(`/api/${route}/${id}`, {
      method: "PUT",
      contentType: "application/json",
      body: JSON.stringify(data),
    });
    if (response.ok) return { route, response };
  } else if (method === "delete" && id) {
    const response = await fetch(`/api/${route}/${id}`, {
      method: "DELETE",
      contentType: "application/json",
      body: JSON.stringify(data),
    });
    if (response.ok) return { route, response };
  } else {
    console.log("does this look right? ", `fetching to /api/${route}/${id}`);
  }
};
