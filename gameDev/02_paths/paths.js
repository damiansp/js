const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const H = canvas.height;
const W = canvas.width;
const MINOR_SPACE = 10;


function drawGrid(ctx, minor, major, stroke, fill) {
  minor = minor || MINOR_SPACE;
  major  = major || 5 * minor;
  stroke = stroke || '#0F0';
  fill = fill || '#090';
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


//drawGrid(ctx);
drawGrid(ctx, 10, 50, 'yellow', 'red');
//drawGrid(ctx, 5, 30, 'white', 'red');


