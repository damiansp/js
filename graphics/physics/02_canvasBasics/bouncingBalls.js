const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const radius = 20;
const nBalls = 30;
const color = '#DEAD00';
const g = 0.1; // gravitational acceleration
let isDragging = false;

window.onload = init;


function Ball(radius, color) {
  this.radius = radius;
  this.color = color;
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
}


Ball.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.fill();
};


function init() {
  balls = new Array();
  for (let i = 0; i < nBalls; i++) {
    let ball = new Ball(radius, color);
    ball.x = radius + 10*i;
    ball.y = radius + 5*i;
    ball.vx = 5 * Math.random();
    ball.vy = 4 * (Math.random() - 0.5);
    ball.draw(ctx);
    balls.push(ball)
  }
  canvas.addEventListener('mousedown', stopAnim, false);
  canvas.addEventListener('mouseup', startAnim, false);
  /*
  canvas.addEventListener('mousedown', function() {
      canvas.addEventListener('mousemove', onDrag, false);
      canvas.addEventListener('mouseup', onDrop, false);
  }, false);
  */
  startAnim();
}


function onDrag(evt) {
  isDragging = true;
  ball.x = evt.clientX;
  ball.y = evt.clientY;
}


function onDrop(evt) {
  isDragging = false;
  canvas.removeEventListener('mousemove', onDrag, false);
  canvas.removeEventListener('mouseup', onDrop, false);
}


function startAnim() {
  interval = setInterval(onEachStep, 1000 / 60); // 60 fps
}


function stopAnim() {
  clearInterval(interval);
}


function onEachStep() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < nBalls; i++) {
    let ball = balls[i];
    ball.vy += g;
    ball.x += ball.vx;
    ball.y += ball.vy;
    if (ball.y > canvas.height - radius) {
      ball.y = canvas.height - radius;
      ball.vy *= -0.95;
    }
    if (ball.x > canvas.width + radius) {
      ball.x = -radius;
    }
    ball.vx *= 0.999;
    ball.draw(ctx);
  }
}
