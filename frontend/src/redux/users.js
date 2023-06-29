// constants
import { removeCookieFromStorage,  bp_cookie } from "./utils/authUtils";
import { setLoginStatus } from "./actions/userActions";

import { SET_USER, SET_LOGIN_STATUS, REMOVE_USER } from "./actions/userActions";

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
        dispatch(setLoginStatus(data));
        return dispatch(loadGarage());
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

      removeCookieFromStorage(bp_cookie);
      
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
        if (data.access_token) {

          return data;
        }
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


const initialState = { user: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN_STATUS:
      return {
        ...state,
        [action.data]: action.data,
      };
    case SET_USER:
      return {
        user: action.payload.user,
      };
    case REMOVE_USER:
      return { user: null };
    default:
      return state;
  }
}
