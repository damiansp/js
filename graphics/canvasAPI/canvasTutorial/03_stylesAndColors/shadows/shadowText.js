function draw() {
  let ctx = document.getElementById('canvas').getContext('2d');

  ctx.shadowOffsetX = 6;
  ctx.shadowOffsetY = 4;
  ctx.shadowBlur = 2;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
  ctx.font = '20px Times New Roman';
  ctx.fillStyle = 'Black';
  ctx.fillText('The quick brown dog jumps over', 5, 30);
  ctx.fillText('    the lazy fox', 5, 50);
  ctx.fillText('THE QUICK BROWN DOG', 5, 80);
  ctx.fillText('    JUMPS OVER THE LAZY FOX', 5, 100);
}
