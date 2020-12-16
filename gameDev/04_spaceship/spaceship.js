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
  ctx.lineTo(x + r*Math.cos(Math.PI - angle), y + r*Math.sin(Math.PI - angle));
  ctx.lineTo(x + r*Math.cos(Math.PI + angle), y + r*Math.sin(Math.PI + angle));
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}


function drawShip2(ctx, r, angle) {
  ctx.beginPath();
  ctx.moveTo(r, 0);
  ctx.lineTo(r * Math.cos(Math.PI - angle), r * Math.sin(Math.PI - angle));
  ctx.lineTo(r * Math.cos(Math.PI + angle), r * Math.sin(Math.PI + angle));
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}


function addShip(ctx, x, y, r, f, options={}) {
  ctx.save();
  if (options.guide) showGuide(ctx, x, y, r);
  ctx = initDrawSettings(ctx, options);
  let angle = (options.angle || Math.PI / 2) / 2;
  if (f == 'ds') drawShip(ctx, x, y, r, angle);
  ctx.restore();
  return ctx;
}


function rotateCtx(ctx) {
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = 'cyan';
  let x = 0.9 * W,
    y = 0,
    radius = 0.1 * W;
  for (let r = 0; r <= 0.5*Math.PI; r += 0.05*Math.PI) {
    ctx.save();
    ctx.rotate(r);
    addShip(ctx, x, y, radius, 'ds', {guide: true, fill: '#00FFFF88'});
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(x, 0);
    ctx.stroke();
    ctx.restore();
  }  
}


function spiral(ctx) {}


function main(ctx) {
  drawGrid(ctx, H, W, 10, 50, 'yellow', 'red');
  addShip(ctx, 200, 200, 150, 'ds', {guide: true});
  addShip(
    ctx,  75,  75,  50, 'ds', {stroke: 'gold', fill: 'purple', guide: true});
  addShip(ctx, 325, 325,  50, 'ds', {angle: 0.8 * Math.PI, guide: true});
  addShip(ctx,  75, 325,  50, 'ds', {angle: 0.3 * Math.PI});
  addShip(ctx, 325,  75,  50, 'ds', {lineWidth: 8, fill: 'blue'});
  rotateCtx(ctx);
}

main(ctx);
