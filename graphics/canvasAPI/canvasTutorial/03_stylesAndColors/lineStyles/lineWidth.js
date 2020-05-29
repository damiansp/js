function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  for (let i = 0; i < 10; i++) {
    ctx.lineWidth = 1 + i;
    ctx.beginPath();
    ctx.moveTo(5 + 14*i, 5);
    ctx.lineTo(5 + 14*i, 140);
    ctx.stroke();
  }
}
