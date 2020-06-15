function draw() {
  let ctx = document.getElementById('canvas').getContext('2d');
  ctx.font = '48px serif';
  ctx.fillText('こんにちは、', 10, 50);
  ctx.strokeText('世界!', 30, 100);
}
