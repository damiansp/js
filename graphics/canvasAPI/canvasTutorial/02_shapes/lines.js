function draw() {
  const canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  // Filled Triangle
  ctx.beginPath();
  ctx.moveTo(25, 25);
  ctx.lineTo(105, 25);
  ctx.lineTo(25, 105);
  ctx.fill();

  // Stroked Triangle
  ctx.beginPath();
  ctx.moveTo(125, 125);
  ctx.lineTo(125, 45);
  ctx.lineTo(45, 125);
  ctx.closePath();
  ctx.stroke();
}
