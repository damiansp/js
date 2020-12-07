const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const H = canvas.height;
const W = canvas.width;

drawGrid(ctx, H, W, 10, 50, 'yellow', 'red');

function drawPacman(ctx, cx, cy, r) {
  ctx.beginPath();
  openness = Math.random() * 0.2
    ctx.arc(cx, cy, r, openness * Math.PI, (2 - openness) * Math.PI);
  ctx.lineTo(cx, cy);
  ctx.fillStyle = 'yellow';
  ctx.fill();
  ctx.closePath();
  ctx.stroke();
}

function randomPacmen(ctx, n) {
  const minR = 5;
  const maxR = 50;
  do {
    let x = W * Math.random();
    let y = H * Math.random();
    let r = minR + (maxR - minR)*Math.random();
    drawPacman(ctx, x, y, r);
  } while (Math.random() < 0.95);
}

randomPacmen(ctx, 200, 200, 150);
