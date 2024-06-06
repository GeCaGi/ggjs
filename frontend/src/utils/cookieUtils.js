// src/utils/cookieUtils.js
export function setCookie(name, value, days = 1) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }
  
  export function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  export function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
  
  export function validateCookies() {
    const user = getCookie("username");
    const expiration = getCookie("expiration");
  
    if (user && expiration) {
      const expirationDate = new Date(expiration);
      const now = new Date();
  
      if (now > expirationDate) {
        deleteCookie("username");
        deleteCookie("expiration");
        return false;
      }
  
      return true;
    }
  
    return false;
  }
  
  export function getInfoFromCookies() {
    const user = getCookie("username");
    if (validateCookies()) {
      return { username: user };
    }
    return null;
  }
  
  export function setSessionCookies(username) {
    const now = new Date();
    const expirationDate = new Date(now.getTime() + 24 * 60 * 60 * 1000).toUTCString();
    setCookie("username", username, 1);
    setCookie("expiration", expirationDate, 1);
  }
  