function draw() {
  let ctx = document.getElementById('canvas').getContext('2d');
  ctx.fillRect(0, 0, 150, 150);
  ctx.save(); // save default state

  ctx.fillStyle = '#09F';
  ctx.fillRect(15, 15, 120, 120);
  ctx.save(); // save current state

  ctx.fillStyle = '#FFF';
  ctx.globalAlpha = 0.5;
  ctx.fillRect(30, 30, 90, 90);

  ctx.restore(); // restore prev state
  ctx.fillRect(45, 45, 60, 60); // blue rect

  ctx.restore(); // restore orig state
  ctx.fillRect(60, 60, 30, 30); // black rect
}
