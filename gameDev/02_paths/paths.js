const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const H = canvas.height;
const W = canvas.width;


function drawGrid(ctx, minor=10, major=50, stroke='#0F0', fill='#090') {
  ctx.save();
  ctx.strokeStyle = stroke;
  ctx.fillStyle = fill;
  for (let x = 0; x < W; x += minor) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, H);
    ctx.lineWidth = (x % major == 0) ? 0.5 : 0.25;
    ctx.stroke();
    if (x % major == 0) ctx.fillText(x, x, 10);
  }
  for (let y = 0; y < H; y += minor) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.lineWidth = (y % major == 0) ? 0.5 : 0.25;
    ctx.stroke();
    if (y % major == 0) ctx.fillText(y, 0, y + 10);
  }
  ctx.restore();
}


function drawLines(ctx, zag, close, stroke='#FFF', fill='#0F0') {
  ctx.save();
  ctx.strokeStyle = stroke;
  ctx.fillStyle = fill;
  ctx.lineWidth = 2;
  ctx.beginPath();
  let points = [[50, 50], [150, 250], [250, 150]];
  ctx.moveTo(...points[0]);
  ctx.lineTo(...points[1])
  ctx.lineTo(...points[2]);
  if (zag) {
    points.push([350, 350]);
    ctx.lineTo(...points[3]);
  }
  if (close) ctx.closePath();
  ctx.stroke();
  for (let point of points) {
    let [x, y] = point
      ctx.fillText(`(${x}, ${y})`, x - 20, y - 10);
  }
  if (fill) ctx.fill();
  ctx.restore();
}


drawGrid(ctx, 10, 50, 'yellow', 'red');
drawLines(ctx, zag=true, close=true);//, stroke='#FED', fill=false);

