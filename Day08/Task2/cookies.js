function getCookie(name) {
  if (!name) {
    console.log("getCookie: cookie name is required");
    return null;
  }

  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

function setCookie(name, value, expiryDate) {
  if (!name || !value) {
    console.log("setCookie: name and value are required");
    return;
  }

  let cookie = `${name}=${encodeURIComponent(value)}; path=/;`;

  if (expiryDate) {
    const date = new Date(expiryDate);
    if (!isNaN(date.getTime())) {
      cookie += ` expires=${date.toUTCString()};`;
    }
  }
  document.cookie = cookie;
}


function deleteCookie(name) {
  if (!name) {
    console.log("deleteCookie: cookie name is required");
    return;
  }

  document.cookie = `${name}=; max-age=0; path=/;`;
}

function allCookieList() {
  const result = {};
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    result[key] = value;
  }
  return result;
}

function hasCookie(name) {
  if (!name) {
    console.log("hasCookie: cookie name is required");
    return false;
  }

  return getCookie(name) !== null;
}


setCookie("theme", "dark", "2026-10-01");
let theme = getCookie("theme");
console.log(theme);
let all = allCookieList();
console.log(all);
let has = hasCookie('theme');
console.log(has);


deleteCookie('theme');