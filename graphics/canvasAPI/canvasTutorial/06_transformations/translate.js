function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.save();
      ctx.fillStyle = 'rgb(' + (255 - 51 * i) + ', 255, ' + (51*i)  + ')';
      ctx.translate(10 + 50*j, 10 + 50*i);
      ctx.fillRect(0, 0, 25, 25);
      ctx.restore();
    }
  }
}
