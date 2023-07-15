export const SET_USER = "session/SET_USER";
export const REMOVE_USER = "session/REMOVE_USER";


export const setUser = (payload) => ({
  type: SET_USER,
  message: payload.message,
  isLoggedIn: payload.authenticated,
});

export const removeUser = (payload) => ({
  type: REMOVE_USER,
  message: payload.message,
  isLoggedIn: false,
});
