const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let car,
  mass,
  vmag,
  ke,
  t,
  t0,
  applyThrust = false,
  dt,
  animID;

const ANIM_TIME = 60,
  POWER_LOSS_FACTOR = 0.25,
  POWER_APPLIED = 5000,
  A_KEY = 65;

window.onload = init;


function init() {
  car = new Ball(15, '#7B488E', 1, 0, true);
  car.pos2D = new Vector2D(50, 50);
  car.velo2D = new Vector2D(20, 0);
  car.draw(ctx);
  mass = car.mass;
  vmag = car.velo2D.length();
  ke = 0.5 * mass * vmag * vmag;
  window.addEventListener('keydown', startThrust, false);
  window.addEventListener('keyup', stopThrust, false);
  t0 = new Date().getTime();
  t = 0;
  animFrame();
}


function startThrust(e) { if (e.keyCode == A_KEY) applyThrust = true; }


function stopThrust(e) { applyThrust = false; }


function animFrame() {
  animID = requestAnimationFrame(animFrame, canvas);
  onTimer();
}


function onTimer() {
  let t1 = new Date().getTime();
  dt = 0.001 * (t1 - t0);
  t0 = t1;
  if (dt > 0.2) dt = 0; // bug fix for tab-switching
  t += dt;
  if  (t < ANIM_TIME) move();
  else stop();
}


function move() {
  moveObject();
  applyPower();
  updateVelo();
}


function moveObject() {
  car.pos2D = car.pos2D.addScaled(car.velo2D, dt);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  car.draw(ctx);
}


function applyPower() {
  if (applyThrust) ke += POWER_APPLIED * dt;
  ke == POWER_LOSS_FACTOR * vmag * vmag * dt;
}


function updateVelo() {
  vmag = Math.sqrt(2 * ke/mass);
  //car.velo2D = new Vector2D(vmag, 0);
  car.vx = vmag;
}


function stop() { cancelAnimationFrame(animID); }
