const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const canvasFG = document.getElementById('canvas_fg');
const contextFG = canvas_fg.getContext('2d');

let ball;
let t0;
let dt;
let animId;
let force;
let acc;
let g = 50;
let k = 0.01;
let rho = 1.5;
let V = 1;
let yLevel = 300;
let vfac = -0.8;

window.onload = init;


function init() {
  ball = new Ball(40, '#0000ff', 1, 0, true);
  ball.pos2D = new Vector2D(50, 50);
  ball.velo2D = new Vector2D(40, -20);
  ball.draw(context);
  contextFG.fillStyle = 'rgba(0, 255, 255, 0.5)';
  contextFG.fillRect(0,yLevel, canvas.width, canvas.height);
  addEventListener('mousedown', onDown, false);
  addEventListener('mouseup', onUp, false);
  initAnim();
}


function onDown(e) {
  ball.velo2D = new Vector2D(0, 0);
  ball.pos2D = new Vector2D(e.clientX, e.clientY);
  moveObject();
  stop();
}


function onUp(e) {
  ball.velo2D = new Vector2D(e.clientX - ball.x, e.clientY - ball.y);
  initAnim();
}


function initAnim() {
  t0 = new Date().getTime();
  animFrame();
}


function animFrame() {
  animId = requestAnimationFrame(animFrame, canvas);
  onTimer();
}


function onTimer() {
  var t1 = new Date().getTime();
  dt = 0.001 * (t1 - t0);
  t0 = t1;
  if (dt > 0.2) dt=0
  move();
}


function move() {
  moveObject();
  calcForce();
  updateAccel();
  updateVelo();
}


function stop() {
  cancelAnimationFrame(animId);
}


function moveObject() {
  ball.pos2D = ball.pos2D.addScaled(ball.velo2D,dt);
  context.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw(context);
}


function calcForce() {
  const gravity = Forces.constantGravity(ball.mass, g);
  const rball = ball.radius;
  let xball = ball.x;
  let yball = ball.y;
  let dr = (yball - yLevel) / rball;
  let ratio; // volume fraction of object that is submerged

  if (dr <= -1) ratio = 0;
  else if (dr < 1) ratio = 0.5 + 0.25*dr*(3 - dr*dr);
  else ratio = 1;
  
  const upthrust = new Vector2D(0, -rho * V * ratio * g);
  const drag = ball.velo2D.multiply(-ratio * k * ball.velo2D.length());
  force = Forces.add([gravity, upthrust, drag]);
  if (xball < rball) {
    ball.xpos = rball;
    ball.vx *= vfac;
  }
  if (xball > canvas.width - rball) {
    ball.xpos = canvas.width - rball;
    ball.vx *= vfac;
  }
}


function updateAccel() {
  acc = force.multiply(1 / ball.mass);
}


function updateVelo() {
  ball.velo2D = ball.velo2D.addScaled(acc, dt);
}
