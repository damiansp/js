const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const canvas_bg = document.getElementById('canvas_bg');
const context_bg = canvas_bg.getContext('2d');

let ball;
let t;
let t0;
let dt;
let animId;
let graphDisp;
let graphVelo;
let force;
let acc;
let y0 = 20; // initial particle vertical position
const m = 1; // particle mass
const g = 10;
let k = 0.5;
let animTime = 25; // duration of animation

window.onload = init;


function init() {
  ball = new Ball(15, '#000000', m, 0, true);
  ball.pos2D = new Vector2D(75,y0);
  ball.velo2D = new Vector2D(0,0);
  ball.draw(context);
  t0 = new Date().getTime();
  t = 0;
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
  if (dt > 0.2) dt=0;
  t += dt;
  //console.log(dt,t,t0,animTime);
  if (t < animTime) move();
  else stop();
}


function move() {
  moveObject();
  calcForce();
  updateAccel();
  updateVelo();
}


function moveObject() {
  ball.pos2D = ball.pos2D.addScaled(ball.velo2D, dt);
  context.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw(context);
}


function calcForce(){
  //force = new Vector2D(0, m*g - k*ball.vy);
  let gravity = Forces.constantGravity(m, g);
  let drag = Forces.linearDrag(k, ball.velo2D);
  force = Forces.add([gravity, drag]);
}


function updateAccel() {
  acc = force.multiply(1 / m);
}


function updateVelo() {
  ball.velo2D = ball.velo2D.addScaled(acc, dt);
}


function stop() {
  cancelAnimationFrame(animId);
}
