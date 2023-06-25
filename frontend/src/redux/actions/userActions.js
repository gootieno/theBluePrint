export const SET_USER = "session/SET_USER";
export const REMOVE_USER = "session/REMOVE_USER";
export const SET_ACCESS_TOKEN = "session/SET_ACCESS_TOKEN";
export const REMOVE_ACCESS_TOKEN = "session/REMOVE_ACCESS_TOKEN";

export const setAccessToken = (token) => ({
  type: SET_ACCESS_TOKEN,
  token,
});

export const removeAccessToken = () => ({
  type: REMOVE_ACCESS_TOKEN,
});

export const setUser = (data) => ({
  type: SET_USER,
  payload: data,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});
