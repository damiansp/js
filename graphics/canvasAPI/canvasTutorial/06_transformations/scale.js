function draw() {
  const ctx = document.getElementById('canvas').getContext('2d');

  ctx.save();
  ctx.scale(10, 3);
  ctx.fillRect(1, 10, 10, 10);
  ctx.restore();

  ctx.scale(-1, 1);
  ctx.font = '48px serif';
  ctx.fillText('FLIP', -135, 120);
}
