const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = 'white';
ctx.lineWidth = 1.5;

const H = canvas.height;
const W = canvas.width;
const R = 20;  // radius
const G = 0.1; // gravity


let x = 0,
  y = H / 5,
  xSpeed = 1.5,
  ySpeed = 0;


function frame() {
  ctx.clearRect(0, 0, W, H);
  draw(ctx);
  update();
}


function draw(ctx) {
  drawGrid(ctx);
  /*
  ctx.beginPath();
  ctx.arc(x, y, R, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  */
  ctx.save();
  ctx.translate(x, y);
  drawPacman(ctx);
  ctx.restore();
}


function drawPacman(ctx) {
  angle = 0.2 * Math.PI;
  ctx.save();
  ctx.fillStyle = 'yellow';
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.arc(0, 0, R, angle, -angle);
  ctx.lineTo(0, 0);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}


function update() {
  x += xSpeed;
  y += ySpeed;
  ySpeed += G;
  if (y >= H - R) {
    y = H - R;
    ySpeed *= -0.8; // slow down on bounce
    xSpeed *= 0.95;
  }
  if (x <= 0 || x >= W) x = (x + W) % W;
}


setInterval(frame, 1000.0 / 60.0);  // 60 fps
