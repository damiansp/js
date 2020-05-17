const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let ball;

window.onload = init;


function init() {
  ball = new Ball(20, '#cc00ff');
  ball.x = 50;
  ball.y = 250;
  ball.vx = 2;
  ball.draw(ctx);
  animFrame();
}


function animFrame() {
  setTimeout(function() {
      requestAnimationFrame(animFrame, canvas);
      onEachStep();
  }, 1000 / 60);
}


function onEachStep() {
  ball.x += ball.vx;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw(ctx);
}
