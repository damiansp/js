const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let balls,
  t0,
  t,
  dt,
  animID;
const animTime = 5,
  nBalls = 20;
  

window.onload = init;


function init() {
  balls = [];
  for (let i = 0; i < nBalls; i++) {
    let radius = 20*(Math.random() + 0.5);
    let ball = new Ball(radius, '#0000ff', 1, 0, true);
    ball.pos2D = new Vector2D(canvas.width / 2, canvas.height / 2);
    ball.velo2D = new Vector2D(20*(Math.random() - 0.5),
                               20*(Math.random() - 0.5));
    ball.draw(ctx);
    balls.push(ball);
  }
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
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < nBalls; i++) {
    let ball = balls[i];
    ball.pos2D = ball.pos2D.addScaled(ball.velo2D, dt);
    ball.draw(ctx);
  }
}


function stop() { cancelAnimationFrame(animID); }
