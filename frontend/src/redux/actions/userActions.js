export const SET_USER = "session/SET_USER";
export const REMOVE_USER = "session/REMOVE_USER";
export const SET_LOGIN_STATUS = "session/SET_LOGIN_STATUS";
export const REMOVE_LOGIN_STATUS = "session/REMOVE_LOGIN_STATUS";

export const setLoginStatus = (data) => ({
  type: SET_LOGIN_STATUS,
  payload: data.message,
});

export const removeLoginStatus = (data) => ({
  type: REMOVE_LOGIN_STATUS,
  payload: data.message,
});

export const setUser = (data) => ({
  type: SET_USER,
  payload: data,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});
