const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

window.onload = drawAll;

function drawAll() {
  drawRects();
  drawTri();
  drawFace();
}


function drawRects() {
  ctx.fillRect(25, 25, 100, 100); // x, y, w, h
  ctx.clearRect(45, 45, 60, 60);
  ctx.strokeRect(50, 50, 50, 50); 
}


function drawTri() {
  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.fill();
}


function drawFace() {
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, 2*Math.PI, true); // outer circle
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false); // mouth (clockwise)
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, 2*Math.PI, true); // l eye
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, 2*Math.PI, true); // r eye
  ctx.stroke();
}
