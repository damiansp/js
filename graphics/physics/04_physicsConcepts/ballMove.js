const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let ball,
  t0,
  t,
  dt,
  animID;
const animTime = 5;

window.onload = init;


function init() {
  ball = new Ball(20, '#ff0000', 1, 0, true);
  ball.pos2D = new Vector2D(150, 50);
  ball.velo2D = new Vector2D(30, 20);
  ball.draw(ctx);
  t0 = new Date().getTime();
  t = 0;
  animFrame();
};


function animFrame() {
  animID = requestAnimationFrame(animFrame, canvas);
  onTimer();
}


function onTimer() {
  let t1 = new Date().getTime();
  dt = 0.001 * (t1 - t0);
  t0 = t1;
  t += dt;
  if (t < animTime) move();
  else stop();
}


function move() {
  ball.pos2D = ball.pos2D.addScaled(ball.velo2D, dt);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw(ctx);
}


function stop() { cancelAnimationFrame(animID); }
