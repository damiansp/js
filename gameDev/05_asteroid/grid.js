function drawGridLines(ctx, H, W, minor, major, xy) {
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


function drawGrid(ctx, H, W, minor=10, major=50, stroke='#0F0', fill='#090') {
  ctx.save();
  ctx.strokeStyle = stroke;
  ctx.fillStyle = fill;
  drawGridLines(ctx, H, W, minor, major, 'x');
  drawGridLines(ctx, H, W, minor, major, 'y');
  ctx.restore();
}
