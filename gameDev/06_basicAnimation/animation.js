const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = 'white';
ctx.lineWidth = 1.5;

const H = canvas.height;
const W = canvas.width;
const R = 40; // radius

let x = 0,
  y = H / 2,
  dir = 1;


function frame() {
  ctx.clearRect(0, 0, W, H);
  draw(ctx);
  update(dir);
}


function update() {
  if (dir == 1) {
    x++;
    if (x >= W - R) dir =  -1;
  } else {
    x--;
    if (x <= R) dir = 1;
  }
}


function draw(ctx) {
  drawGrid(ctx);
  ctx.beginPath();
  ctx.arc(x, y, R, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}


setInterval(frame, 1000.0 / 60.0);  // 60 fps
