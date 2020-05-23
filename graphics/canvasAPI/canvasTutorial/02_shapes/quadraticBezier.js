function draw() {
  const canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.moveTo(75, 25);
  ctx.quadraticCurveTo(25, 25, 25, 62.5);
  ctx.quadraticCurveTo(25, 100, 50, 100);
  ctx.quadraticCurveTo(50, 120, 30, 125);
  ctx.quadraticCurveTo(60, 120, 65, 100);
  ctx.quadraticCurveTo(125, 100, 125, 62.5);
  ctx.quadraticCurveTo(125, 25, 75, 25);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(175, 140);
  ctx.bezierCurveTo(175, 137, 170, 125, 150, 125);
  ctx.bezierCurveTo(120, 125, 120, 162.5, 120, 162.5);
  ctx.bezierCurveTo(120, 180, 140, 202, 175, 220);
  ctx.bezierCurveTo(210, 202, 230, 180, 230, 162.5);
  ctx.bezierCurveTo(230, 162.5, 230, 125, 200, 125);
  ctx.bezierCurveTo(185, 125, 175, 137, 175, 140);
  ctx.fill();
}
