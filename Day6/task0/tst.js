// console.log("Screen width:", screen.width);
// console.log("Screen height:", screen.height);
// console.log("Available screen width:", screen.availWidth);
// console.log("Available screen height:", screen.availHeight);
// console.log("Color depth:", screen.colorDepth);
// console.log("Pixel depth:", screen.pixelDepth);

function displaySelected() {
  let select = document.getElementById("menu");
  let result = document.getElementById("result");

  result.innerHTML = "";

  for (let i = 0; i < select.options.length; i++) {
    if (select.options[i].selected) {
      result.innerHTML += select.options[i].value + "<br>";
    }
  }
}
