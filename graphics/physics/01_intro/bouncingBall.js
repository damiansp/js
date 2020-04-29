const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const radius = 20;
const color = '#0000FF';
const g = 0.1; // gravitational acceleration
let x = 50;
let y = 50;
let vx = 2;
let vy = 0;

window.onload = init;


function init() { setInterval(evolve, 1000 / 60); /* 60 fps */ }


function evolve() {
  vy += g;
  x += vx;
  y += vy;
  if (y > canvas.height - radius) { // hits ground
    y = canvas.height - radius;
    vy *= -0.8;
  }
  if (x > canvas.width + radius) { x = -radius; }
  drawBall();
}


function drawBall() {
  with (context) {
    clearRect(0, 0, canvas.width, canvas.height);
    fillStyle = color;
    beginPath();
    arc(x, y, radius, 0, 2 * Math.PI, true);
    closePath();
    fill();
  }
}

