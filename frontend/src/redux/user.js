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
  return response;
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
    console.log(user);
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

const userReducer = (state = null, action) => {
  switch (action.type) {
    case USER_ADDED:
      return {
        [action.user.id]: action.user,
      };
    case USER_REMOVED:
      return null;
    default:
      return state;
  }
};

export default userReducer;
