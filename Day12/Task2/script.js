const canvas = document.getElementById("myCanvas");
const line = canvas.getContext("2d");

let x1 = 0, y1 = 0;
let x2 = 0, y2 = 0;

function draw() {
  line.beginPath();
  line.moveTo(x1, y1);
  line.lineTo(x2, y2);
  line.strokeStyle = "red";
  line.lineWidth = 5;
  line.stroke();
  x2 += 2;
  y2 += 2;
  if (x2 > canvas.width || y2 > canvas.height) {
    alert("animation end");
  } else {
    requestAnimationFrame(draw);
  }
}
draw();