function draw() {
  let ctx = document.getElementById('canvas').getContext('2d');
  ctx.font = '48px serif';
  ctx.textBaseline = 'hanging';
  ctx.strokeText('Hello, World!', 0, 100);
}
