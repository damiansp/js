const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const H = canvas.height;
const W = canvas.width;


function setOptions(ctx, options) {
  options = options || {};
  ctx.strokeStyle = options.stroke || 'white';
  ctx.fillStyle = options.fill || 'black';
  options.guide = options.guide || true;
  return ctx, options;
}


function drawGuide(ctx, r) {
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, 2 * Math.PI);
  ctx.stroke();
  return ctx;
}


function drawAsteroid(ctx, r, segments, options) {
  ctx, options = setOptions(ctx, options);
  ctx.save();
  ctx.beginPath();
  for (let i = 0; i < segments; i++) {
    ctx.rotate(2 * Math.PI / segments);
    ctx.lineTo(r, 0);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  if (options.guide) {
    ctx = drawGuide(ctx, r);
  }
  ctx.restore()
}


function main(ctx) {
  let segments = 1;
  for (let x=0.25; x < 1; x += 0.5) {
    for (let y=0.25; y < 1; y += 0.5) {
      segments += 2;
      ctx.save();
      ctx.translate(W * x, H * y);
      drawAsteroid(ctx, 60, segments, {guide: true});
      ctx.restore();
    }
  }
}

main(ctx);
