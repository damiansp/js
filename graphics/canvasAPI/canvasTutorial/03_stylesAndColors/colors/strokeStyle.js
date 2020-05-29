function draw() {
  let ctx = document.getElementById('canvas').getContext('2d');
  for (let i = 0; i < 6; ++i) {
    for (let j = 0; j < 6; ++j) {
      ctx.strokeStyle = ('rgb('
                       + Math.floor(255 - 42.5*i)
                       + ', '
                       + Math.floor(255 - 42.5*j)
                       + ', 0)');
      ctx.beginPath();
      ctx.arc(12.5 + 25*j, 12.5 + 25*i, 10, 0, 2*Math.PI, true);
      ctx.stroke();
    }
  }
}
