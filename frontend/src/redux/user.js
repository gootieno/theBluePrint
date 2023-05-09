// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";

const setUser = (data) => ({
  type: SET_USER,
  payload: data,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
  const accessToken = sessionStorage.getItem('bp_token')
  if(!accessToken) removeUser()

  const response = await fetch("/api/auth/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("response ", response);
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }

    dispatch(setUser(data));

  }
};

export const loginUser =
  ({ email, password }) =>
  async (dispatch) => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    console.log("response", response);
    if (response.ok) {
      const data = await response.json();
      dispatch(setUser(data));
      console.log("data ", data);
      return data;
    } else if (response.status < 500) {
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }
    } else {
      return ["An error occurred. Please try again."];
    }
  };

export const logoutUser = () => async (dispatch) => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    dispatch(removeUser());
  }
  return response;
};

export const signupUser =
  ({ username, email, password }) =>
  async (dispatch) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setUser(data));
      return null;
    } else if (response.status < 500) {
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }
    } else {
      return ["An error occurred. Please try again."];
    }
  };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.payload.user,
        accessToken: action.payload.access_token,
      };
    case REMOVE_USER:
      return { user: null };
    default:
      return state;
  }
}
