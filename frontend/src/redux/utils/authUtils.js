export const getTokenFromStorage = () =>
  sessionStorage.getItem("bp_access_token");

export const setTokenToStorage = (token) =>
  sessionStorage.setItem("bp_access_token", token);

export const removeTokenFromStorage = () =>
  sessionStorage.removeItem("bp_access_token");

export const checkForToken = () => (dispatch) => {
  const accessToken = getTokenFromStorage();
  if (!accessToken) {
    removeTokenFromStorage();
    return false;
  } else {
    return accessToken;
  }
};
