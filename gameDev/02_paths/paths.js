const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const H = canvas.height;
const W = canvas.width;


function drawGridLines(ctx, minor, major, xy) {
  let HW = xy == 'x' ? H : W;
  for (let p = 0; p < HW; p += minor) {
    ctx.beginPath();
    let start = xy == 'x' ? [p, 0] : [0, p];
    let end = xy == 'x' ? [p, HW] : [HW, p];
    ctx.moveTo(...start);
    ctx.lineTo(...end);
    ctx.lineWidth = (p % major == 0) ? 0.5 : 0.25;
    ctx.stroke();
    if (p % major == 0) {
      let textLoc = xy == 'x' ? [p, p, 10] : [p, 0, p + 10];
      ctx.fillText(...textLoc);
    }
  }
}


function drawGrid(ctx, minor=10, major=50, stroke='#0F0', fill='#090') {
  ctx.save();
  ctx.strokeStyle = stroke;
  ctx.fillStyle = fill;
  drawGridLines(ctx, minor, major, 'x');
  drawGridLines(ctx, minor, major, 'y');
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


function drawCurve(ctx, stroke, fill) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(50, 250);
  ctx.quadraticCurveTo(25, 300, 50, 350);
  ctx.quadraticCurveTo(100, 375, 150, 350);
  ctx.closePath();
  ctx.moveTo(230, 360);
  ctx.quadraticCurveTo(255, 340, 270, 360);
  ctx.quadraticCurveTo(255, 340, 270, 310);
  ctx.closePath();
  ctx.moveTo(250, 50);
  ctx.quadraticCurveTo(310, 60, 370, 50);
  ctx.quadraticCurveTo(400, 75, 370, 100);
  ctx.closePath();
  ctx.strokeStyle = stroke;
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}


drawGrid(ctx, 10, 50, 'yellow', 'red');
drawLines(ctx, zag=true, close=true);//, stroke='#FED', fill=false);
drawCurve(ctx, 'white', 'purple');
