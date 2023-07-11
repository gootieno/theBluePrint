// constants
import {
  getCookieFromStorage,
  removeCookieFromStorage,
  BP_COOKIE,
} from "./utils/authUtils";
import { setLoginMessage, removeLoginMessage } from "./actions/userActions";

import { SET_LOGIN_MESSAGE, REMOVE_LOGIN_MESSAGE } from "./actions/userActions";

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
        const { message, garage_id } = await response.json();
        dispatch(setLoginMessage(message));
        dispatch(loadGarage(garage_id));

        return garage_id;
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
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const cookie = getCookieFromStorage(BP_COOKIE);
      if (cookie) removeCookieFromStorage(cookie);

      const data = await response.json();
      console.log("data  ", data);
      dispatch(removeLoginMessage(data.message));
    } else {
      // Handle non-200 response status
      const errorData = await response.json();
      throw new Error(errorData.message || "Logout failed");
    }

    return response;
  } catch (error) {
    // Handle network errors or other exceptions
    console.error("Logout error:", error);
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
        dispatch(setLoginMessage(data.message));
        return dispatch(loadGarage());
      } else {
        // Handle non-200 response status
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed");
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Signup error:", error);
      throw error;
    }
  };

const initialState = { isLoggedIn: false };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN_MESSAGE:
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.message = action.message;
      return newState;
    case REMOVE_LOGIN_MESSAGE: {
      return {
        ...state,
        [state.user]: null,
        message: action.message,
      };
    }

    default:
      return state;
  }
}
