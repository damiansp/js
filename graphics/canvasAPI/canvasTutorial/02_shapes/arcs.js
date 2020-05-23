function draw() {
  const canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  for (let i = 0; i < 4; ++i) {
    for (let j = 0; j < 3; ++j) {
      ctx.beginPath();
      let x = 25 + 50*j;
      let y = 25 + 50*i;
      const radius = 20;
      const startAngle = 0;
      let endAngle = Math.PI + (Math.PI*j) / 2;
      let counterclockwise = i % 2 !== 0;

      ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
      if ((i + j) % 2 == 0) { ctx.fill(); }
      else { ctx.stroke(); }
    }
  }
}
