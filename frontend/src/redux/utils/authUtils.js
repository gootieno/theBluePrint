import { setLoginMessage } from "../actions/userActions";
import { logoutUser } from "../users";

export const BP_COOKIE = "csrf_access_token";

const cookieParser = () => {
  const allCookies = document.cookie.split("; ");

  const cookieObj = {};

  for (const cookie of allCookies) {
    const cookieKey = cookie.split("=")[0];
    const cookieValue = cookie.split("=")[1];

    cookieObj[cookieKey] = cookieValue;
  }

  return cookieObj;
};

export const getCookieFromStorage = (cookieName) => {
  const cookieObj = cookieParser();

  const cookie = cookieObj[cookieName];

  if (cookie) return cookie;
  else return null;
};
export const removeCookieFromStorage = (cookieName) => {
  document.cookie = `${cookieName}=;max-age=0`;

  const cookieObj = cookieParser();

  if (cookieObj[cookieName])
    return { message: "remove cookie failed", isRemoved: false };
  else return { message: "remove cookie successful", isRemoved: true };
};

export const restoreUser = (bp_cookie, dispatch) => {
  const cookie = getCookieFromStorage(bp_cookie);
  if (cookie !== null)
    dispatch(setLoginMessage({ message: "login successful" }));
};
