function draw() {
  let ctx = document.getElementById('canvas').getContext('2d');
  const lineJoin = ['round', 'bevel', 'miter'];
  ctx.lineWidth = 20;
  for (let i = 0; i < lineJoin.length; i++) {
    ctx.lineJoin = lineJoin[i];
    ctx.beginPath();
    ctx.moveTo(-5, 5 + 40*i);
    ctx.lineTo(35, 45 + 40*i);
    ctx.lineTo(75, 5 + 40*i);
    ctx.lineTo(115, 45 + 40*i);
    ctx.lineTo(155, 5 + 40*i);
    ctx.stroke();
  }
}
