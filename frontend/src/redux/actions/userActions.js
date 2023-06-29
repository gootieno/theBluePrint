export const SET_USER = "session/SET_USER";
export const REMOVE_USER = "session/REMOVE_USER";
export const SET_LOGIN_MESSAGE = "session/SET_LOGIN_MESSAGE";
export const REMOVE_LOGIN_MESSAGE = "session/REMOVE_LOGIN_MESSAGE";

export const setLoginMessage = (message) => ({
  type: SET_LOGIN_MESSAGE,
  message,
});

export const removeLoginMessage = (message) => ({
  type: REMOVE_LOGIN_MESSAGE,
  message,
});


