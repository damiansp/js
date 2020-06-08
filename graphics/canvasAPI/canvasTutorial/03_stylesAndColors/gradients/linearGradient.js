function draw() {
  let ctx = document.getElementById('canvas').getContext('2d');

  let lingrad = ctx.createLinearGradient(0, 0, 0, 150);
  lingrad.addColorStop(0, '#ABEB00');
  lingrad.addColorStop(0.5, '#FFF');
  lingrad.addColorStop(0.5, '#C00026');
  lingrad.addColorStop(1, '#FFF');

  let lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
  lingrad2.addColorStop(0.5, '#000');
  lingrad2.addColorStop(1, 'rgba(0, 0, 0, 0)');

  ctx.fillStyle = lingrad;
  ctx.strokeStyle = lingrad2;

  ctx.fillRect(10, 10, 130, 130);
  ctx.strokeRect(50, 50, 50, 50);
}
