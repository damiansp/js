function draw() {
  let ctx = document.getElementById('canvas').getContext('2d');

  // Gradients
  let radGrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
  radGrad.addColorStop(0, '#7D30CA');
  radGrad.addColorStop(0.9, '#19F620');
  radGrad.addColorStop(1, 'rgba(159, 98, 1, 0)');

  let radGrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
  radGrad2.addColorStop(0, '#F5F98F');
  radGrad2.addColorStop(0.75, '#F0188F');
  radGrad2.addColorStop(1, 'rgba(1, 136, 255, 0)');

  let radGrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
  radGrad3.addColorStop(0, '#0C9FF0');
  radGrad3.addColorStop(0.75, '#0B5E20');
  radGrad3.addColorStop(1, 'rgba(201, 255, 0, 0)');

  let radGrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
  radGrad4.addColorStop(0, '#4f201F');
  radGrad4.addColorStop(0.75, '#4C700E');
  radGrad4.addColorStop(1, 'rgba(100, 0, 229, 0)');

  // Draw
  ctx.fillStyle = radGrad4;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radGrad3;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radGrad2;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radGrad;
  ctx.fillRect(0, 0, 150, 150);
}
