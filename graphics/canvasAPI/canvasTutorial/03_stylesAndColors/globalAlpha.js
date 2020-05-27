function draw() {
  let ctx = document.getElementById('canvas').getContext('2d');

  // background
  ctx.fillStyle = '#FD0';
  ctx.fillRect(0, 0, 75, 75);
  ctx.fillStyle = '#6C0';
  ctx.fillRect(75, 0, 75, 75);
  ctx.fillStyle = '#09F';
  ctx.fillRect(0, 75, 75, 75);
  ctx.fillStyle = '#F30';
  ctx.fillRect(75, 75, 75, 75);
  ctx.fillStyle = '#FFF';

  ctx.globalAlpha = 0.2;

  // Transparent circles
  for (let i = 0; i < 7; ++i) {
    ctx.beginPath();
    ctx.arc(75, 75, 10 + 10*i, 0, 2*Math.PI, true);
    ctx.fill();
  }
}
