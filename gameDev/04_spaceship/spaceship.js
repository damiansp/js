const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const H = canvas.height;
const W = canvas.width;


function showGuide(ctx, x, y, r) {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.lineWidth = 0.5;
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
}


function initDrawSettings(ctx, options) {
  ctx.lineWidth = options.lineWidth || 2;
  ctx.strokeStyle = options.stroke || 'white';
  ctx.fillStyle = options.fill || 'black';
  return ctx;
}


function drawShip(ctx, x, y, r, angle) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + r*Math.cos(Math.PI - angle), y +r*Math.sin(Math.PI - angle));
  ctx.lineTo(x + r*Math.cos(Math.PI + angle), y +r*Math.sin(Math.PI + angle));
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}


function addShip(ctx, x, y, r, options={}) {
  ctx.save();
  if (options.guide) showGuide(ctx, x, y, r);
  ctx = initDrawSettings(ctx, options);
  let angle = (options.angle || Math.PI / 2) / 2;
  drawShip(ctx, x, y, r, angle);
  ctx.restore();
  return ctx;
}


function main(ctx) {
  drawGrid(ctx, H, W, 10, 50, 'yellow', 'red');
  addShip(ctx, 200, 200, 150, {guide: true});
  addShip(ctx,  75,  75,  50, {stroke: 'gold', fill: 'purple', guide: true});
  addShip(ctx, 325, 325,  50, {angle: 0.8 * Math.PI, guide: true});
  addShip(ctx,  75, 325,  50, {angle: 0.3 * Math.PI});
  addShip(ctx, 325,  75,  50, {lineWidth: 8, fill: 'blue'});
}

main(ctx);
