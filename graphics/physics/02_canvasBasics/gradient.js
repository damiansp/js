const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = init;

function init() {
  let grad = ctx.createLinearGradient(0, 0, 0, 500);
  grad.addColorStop(0, '#ffffff');
  grad.addColorStop(1, '#0000ff');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 700, 500);

  let rGrad = ctx.createRadialGradient(350, 250, 5, 350, 250, 50);
  rGrad.addColorStop(0, '#ffffff');
  rGrad.addColorStop(1, '#ff0000');
  ctx.fillStyle = rGrad;
  ctx.arc(350, 250, 50, 0, 2*Math.PI, true);

  ctx.fill();
}
