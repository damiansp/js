function draw() {
  let ctx = document.getElementById('canvas').getContext('2d');

  ctx.strokeStyle = '#09f';
  ctx.lineWidth = 2;
  ctx.strokeRect(-5, 50, 160, 50);

  ctx.strokeStyle = '#000';
  ctx.lineWidth = 10;

  /* Use user input
  if (document.getElementById('miterLimit').value.match(/\d+(\.\d+)?/)) {
    ctx.miterLimit = parseFloat(document.getElementById('miterLimit').value);
  } else { alert('Value must be positive'); }
  */

  ctx.miterLimit = 7; /* or just set here */
  ctx.beginPath();
  ctx.moveTo(0, 100);
  for (let i = 0; i < 24; i++) {
    let dy = i % 2 == 0 ? 25 : -25;
    ctx.lineTo(Math.pow(i, 1.5) * 2, 75 + dy);
  }
  ctx.stroke();
  return false;
}
