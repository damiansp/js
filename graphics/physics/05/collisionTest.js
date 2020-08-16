const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let t0,
  dt,
  animID,
  balls = new Array();

const RADIUS = 15;


window.onload = init;


function init() {
  makeBalls();
  t0 = new Date().getTime();
  animFrame();
}


function makeBalls() {
  setupBall('#ff0000', new Vector2D(50, 200), new Vector2D(30, 0));
  setupBall('#00ff00', new Vector2D(500, 200), new Vector2D(-20, 0));
  setupBall('#0000ff', new Vector2D(300, 200), new Vector2D(10, 0));
}


function setupBall(color, pos, velo) {
  let ball = new Ball(RADIUS, color, 1, 0, true);
  ball.pos2D = pos;
  ball.velo2D = velo;
  ball.draw(ctx);
  balls.push(ball);
}


function animFrame() {
  animID = requestAnimationFrame(animFrame, canvas);
  onTimer();
}


function onTimer() {
  let t1 = new Date().getTime();
  dt = 0.001 * (t1 - t0);
  t0 = t1;
  if (dt > 0.2) dt = 0; // tab bug fix
  checkCollision();
  move();
}


function move() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (ball of balls) {
    ball.pos2D = ball.pos2D.addScaled(ball.velo2D, dt);
    ball.draw(ctx);
  }
}


function checkCollision() {
  for (let i = 0; i < balls.length - 1; ++i) {
    let ball1 = balls[i];
    for (let j = i + 1; j < balls.length; ++j) {
      let ball2 = balls[j];
      if (Vector2D.distance(ball1.pos2D, ball2.pos2D)
          <= ball1.radius + ball2.radius) {
        let vtemp = ball1.velo2D;
        ball1.velo2D = ball2.velo2D;
        ball2.velo2D = vtemp;
      }
    }
  }
}
