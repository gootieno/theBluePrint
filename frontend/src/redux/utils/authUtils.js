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
    return { message: "remove cookie failed", isLoggedIn: true };
  else return { message: "remove cookie successful", isLoggedIn: false };
};

export const restoreUser = async (abortController, token) => {
  try {
    const response = await fetch("/api/auth/refresh_token", {
      method: "POST",
      headers: { "X-CSRF-TOKEN": token },
      signal: abortController.signal,
    });

    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      throw new Error("Failed to refresh token");
    }
  } catch (error) {
    console.error(error);
  }
};
