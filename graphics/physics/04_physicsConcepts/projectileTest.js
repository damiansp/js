const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let ball1,
  ball2,
  t,
  t0,
  dt,
  animID,
  pos0 = new Vector2D(100, 350),
  pos0a = new Vector2D(65, 350),
  velo0 = new Vector2D(20, -80),
  velo0a = new Vector2D(40, -60),
  acc = new Vector2D(0, 10),
  acc2 = new Vector2D(0, 15),
  animTime = 16;

window.onload = init;


function init() {
  ball1 = new Ball(30, '#001234', 1, 0, true);
  ball1.pos2D = pos0;
  ball1.velo2D = velo0;
  ball2 = new Ball(15, '#a98765', 1, 0, true);
  ball2.pos2D = pos0a;
  ball2.velo2D = velo0a;
  ball1.draw(ctx);
  ball2.draw(ctx);
  t0 = new Date().getTime();
  t = 0;
  animFrame();
}


function animFrame() {
  animID = requestAnimationFrame(animFrame, canvas);
  onTimer();
}


function onTimer() {
  let t1 = new Date().getTime();
  dt = 0.001 * (t1 - t0);
  t0 = t1;
  if (dt > 0.2) dt = 0;
  t += dt;
  if (t < animTime) move();
}


function move() {
  // numeric solution
  ball1.pos2D = ball1.pos2D.addScaled(ball1.velo2D, dt);
  ball1.velo2D = ball1.velo2D.addScaled(acc, dt);

  // analytic solution
  ball2.pos2D = pos0.addScaled(velo0, t).addScaled(acc2, 0.5 * t * t);
  ball2.velo2D = velo0.addScaled(acc, t);

  // display
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball1.draw(ctx);
  ball2.draw(ctx);
}
