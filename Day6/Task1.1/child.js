let interval;

function moveDown() {
  let y = window.screenY;
  window.moveTo(window.screenX, y + 5);
}

interval = setInterval(moveDown, 100);

window.addEventListener("message", function(event) {
  if (event.data === "stop") {
    clearInterval(interval);
  }
});
