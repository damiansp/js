function draw() {
  let ctx = document.getElementById('canvas').getContext('2d');

  ctx.beginPath();
  ctx.arc(50, 50, 30, 0, 2*Math.PI, true);
  ctx.arc(50, 50, 15, 0, 2*Math.PI, true);
  //ctx.fill('nonzero'); // default
  ctx.fill('evenodd');
}
