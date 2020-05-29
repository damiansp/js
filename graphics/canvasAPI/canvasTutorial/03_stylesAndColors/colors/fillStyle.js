function draw() {
  let ctx = document.getElementById('canvas').getContext('2d');
  for (let i = 0; i < 6; ++i) {
    for (let j = 0; j < 6; ++j) {
      ctx.fillStyle = ('rgb(0, '
                       + Math.floor(255 - 42.5*i)
                       + ', '
                       + Math.floor(255 - 42.5*j)
                       + ')');
      ctx.fillRect(25 * j, 25 * i, 25, 25);
    }
  }
}
