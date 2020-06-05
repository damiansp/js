function draw() {
  let ctx = document.getElementById('canvas').getContext('2d');
  const lineCap = ['butt', 'round', 'square'];

  ctx.strokeStyle = '#09f';
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(140, 10);
  ctx.moveTo(10, 140);
  ctx.lineTo(140, 140);
  ctx.stroke();

  ctx.strokeStyle = 'black';
  for (let i = 0; i < lineCap.length; i++) {
    ctx.lineWidth = 15;
    ctx.lineCap = lineCap[i];
    ctx.beginPath();
    ctx.moveTo(25 + 50*i, 10);
    ctx.lineTo(25 + 50*i, 140);
    ctx.stroke();
  }
}
