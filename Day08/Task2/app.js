window.onload = function () {
  const profile = document.getElementById("profile");

  if (!getCookie("userName") || !getCookie("gender") || !getCookie("color")) {
    profile.innerHTML = `<p>Missing registration data. Please go back and register.</p>`;
    return;
  }

    let visits = getCookie("visits");

    if (visits === null) {
        visits = 0;
    }
    else {
        visits = parseInt(visits) + 1;
    }

    setCookie("visits", visits);
  const name = getCookie("userName");
  const gender = getCookie("gender");
  const color = getCookie("color");

  const img = gender === "male" ? "1.jpg" : "2.jpg";

  profile.innerHTML = `
    <h2 style="color:${color}">Welcome, ${name}!</h2>
    <p style="color:${color}">You've visited this page ${visits} times.</p>
    <img src="${img}" width="150">
  `;
};
