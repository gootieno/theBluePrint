// constants
import { setTokenToStorage, removeTokenFromStorage } from "./utils/authUtils";
import {
  setAccessToken,
  removeAccessToken,
  setUser,
  removeUser,
} from "./actions/userActions";

const initialState = { user: null };

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
        if (data.access_token) {
          setTokenToStorage(data.access_token);
          dispatch(setAccessToken(data.access_token));
          dispatch(setUser(data.user));
          return data.user;
        }
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
      removeTokenFromStorage();
      dispatch(removeAccessToken());
      dispatch(removeUser());
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
          setTokenToStorage(data.access_token);
          dispatch(setAccessToken(data.access_token));
          dispatch(setUser(data.user));
          return data.user;
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

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return {
        accessToken: action.token,
      };

    case REMOVE_ACCESS_TOKEN:
      return {
        accessToken: null,
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
