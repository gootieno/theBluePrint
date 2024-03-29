// constants
import {
  getCookieFromStorage,
  removeCookieFromStorage,
  BP_COOKIE,
  resetStore,
} from "./utils/authUtils";

import { setUser, removeUser } from "./actions/userActions";
import { SET_USER, REMOVE_USER } from "./actions/userActions";
import { loadGarage } from "./garage";

export const loginUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
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

      if (response.ok) {
        const data = await response.json();
        console.log("login data ", data);
        dispatch(setUser(data));

        return data.garage_id;
      } else {
        // Handle non-200 response status
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Login error:", error);
      throw error;
    }
  };

export const logoutUser = () => async (dispatch) => {
  try {
    const response = await fetch("/api/auth/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const cookie = getCookieFromStorage(BP_COOKIE);
      if (cookie) removeCookieFromStorage(cookie);

      const data = await response.json();
      dispatch(removeUser(data));
      dispatch(resetStore());
    } else {
      // Handle non-200 response status
      const errorData = await response.json();
      throw new Error(errorData.message || "Logout failed");
    }

    return response;
  } catch (error) {
    // Handle network errors or other exceptions
    throw error;
  }
};

export const signupUser =
  ({ email, password, username }) =>
  async (dispatch) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          username,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(setUser(data));
        dispatch(loadGarage(data.garage_id));
        return data;
      } else {
        // Handle non-200 response status
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed");
      }
    } catch (error) {
      // Handle network errors or other exceptions
      throw error;
    }
  };

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      const newState = { ...state };
      newState.message = action.message;
      newState.isLoggedIn = action.isLoggedIn;
      return newState;
    case REMOVE_USER:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        message: action.message,
      };
    // case SET_COOKIE:
    //   return {
    //     ...state,
    //     token: action.token,
    //   };

    default:
      return state;
  }
}
