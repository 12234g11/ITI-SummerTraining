let canvas = document.getElementById('myCanvas');
let circle = canvas.getContext('2d');
let x = canvas.width / 2;
let y = canvas.height / 2;
let r = 100;
let count = 0;
isTop = true;
function drawHalf(isTopSide) {
  circle.clearRect(0, 0, canvas.width, canvas.height);
  circle.beginPath();
    let start, end;
    if (isTopSide) {
        start = Math.PI;
        end = 0;
    } else {
        start = 0;
        end = Math.PI;
    }
    circle.arc(x, y, r, start, end);
    circle.fillStyle = "red";
    circle.fill();
}

function drawFull() {
  circle.clearRect(0, 0, canvas.width, canvas.height);
  circle.beginPath();
  circle.arc(x, y, r, 0, 2 * Math.PI);
  circle.fillStyle = "black";
  circle.fill();
}

let flip = setInterval(() => {
  count++;
  if (count > 10) {
    clearInterval(flip);
    drawFull();
  } else {
    drawHalf(isTop);
    isTop = !isTop;
  }
}, 500);
