let ctx = document.getElementById('canvas').getContext('2d');
let offset = 0;

function march() {
  offset++;
  if (offset > 17) { offset = 0; }
  draw(offset);
  setTimeout(march, 20);
}

function draw(offset) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setLineDash([4, 2, 8, 4]);
  ctx.lineDashOffset = -offset;
  ctx.strokeRect(10, 10, 100, 100);
}


