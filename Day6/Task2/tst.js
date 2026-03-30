var data = location.search.substring(1).split('&');

var arr = [];

for (var i = 0; i < data.length; i++) {
  var keyValue = data[i].split('=');
  var key = keyValue[0];
  var val = keyValue[1];
  arr[key] = val;
}

document.getElementById("greeting").textContent = "Welcome " + arr["title"] + " " + arr["name"];

document.getElementById("info").innerHTML = `
  <p>Email: ${arr["email"]}</p>
  <p>Mobile: ${arr["mobile"]}</p>
  <p>Gender: ${arr["gender"]}</p>
  <p>Address: ${arr["address"]}</p>
`;
console.log(navigator.userAgent)
let ua = navigator.userAgent;
if (!ua.includes("Chrome") || ua.includes("Edg") || ua.includes("OPR")) {
  document.getElementById("recommendation").textContent =
    "Recommendation to use Google Chrome.";
}