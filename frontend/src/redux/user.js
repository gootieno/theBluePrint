import { csrfFetch } from "./csrf";

const USER_ADDED = "users/USER_ADDED";
const USER_REMOVED = "users/USER_REMOVED";

const addUser = (userObj) => ({
  type: USER_ADDED,
  user: userObj,
});

const removeUser = () => ({
  type: USER_REMOVED,
});

/*******************USER SESSION*********************/
export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/session");
  const { user } = await response.json();
  if (!response) throw response;
  dispatch(addUser(user));
  return user;
};

export const signupUser =
  ({ username, email, password }) =>
  async (dispatch) => {
    const response = await csrfFetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    if (!response.ok) throw response;
    const { user } = await response.json();
    dispatch(addUser(user));
    return user;
  };

export const loginUser =
  ({ email, password }) =>
  async (dispatch) => {
    const response = await csrfFetch("/api/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw response;
    const { user } = await response.json();
    dispatch(addUser(user));
    return user;
  };

export const logoutUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE",
  });
  if (!response.ok) throw response;
  dispatch(removeUser());
  return response;
};

let initialState = { user: null };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ADDED:
      let newState = Object.assign({}, state);
      newState.user = action.user;
      return newState;
    case USER_REMOVED:
      let nextState = Object.assign({}, state);
      delete nextState.user;
      return nextState;
    default:
      return state;
  }
};

export default userReducer;
