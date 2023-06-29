export const bp_cookie = getCookieFromStorage("access_cookie");

const cookieParser = () => {
  const allCookies = document.cookies.split("; ");

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
};
export const removeCookieFromStorage = (cookieName) => {
  document.cookie = `${cookieName}=;max-age=0`;

  const cookieObj = cookieParser();
  if (cookieObj[cookieName])
    return { message: "remove cookie failed", isRemoved: false };
  else return { message: "remove cookie successful", isRemoved: true };
};
