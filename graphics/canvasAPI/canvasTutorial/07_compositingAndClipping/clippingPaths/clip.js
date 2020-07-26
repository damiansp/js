function draw() {
  const ctx = document.getElementById('canvas').getContext('2d');

  ctx.fillRect(0, 0, 150, 150);
  ctx.translate(75, 75);

  // Circular clipping
  ctx.beginPath();
  ctx.arc(0, 0, 60, 0, 2 * Math.PI, true);
  ctx.clip();

  // Draw bkg
  const lingrad = ctx.createLinearGradient(0, -75, 0, 75);
  lingrad.addColorStop(0, '#4644AB');
  lingrad.addColorStop(1, '#021939');
  ctx.fillStyle = lingrad;
  ctx.fillRect(-75, -75, 150, 150);

  // Draw stars
  for (let i = 1; i < 50; i++) {
    ctx.save();
    ctx.fillStyle = '#FFF';
    ctx.translate(75 - Math.floor(150 * Math.random()),
                  75 - Math.floor(150 * Math.random()));
    drawStar(ctx, Math.floor(4 * Math.random()) + 2);
    ctx.restore();
  }
}


function drawStar(ctx, r) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(r, 0);
  for (let i = 0; i < 9; i++) {
    ctx.rotate(Math.PI / 5);
    if ( i % 2 === 0) ctx.lineTo((r / 0.525731) * 0.200811, 0);
    else ctx.lineTo(r, 0);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
