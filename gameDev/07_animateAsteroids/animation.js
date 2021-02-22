const ctx = document.getElementById('game').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

// Asteroid attributes
const segments = 24;
const radius = 50;
const noise = 0.2;

let shape = [];
for (let i = 0; i < segments; i++) shape.push(Math.random() - 0.5);

let x = W * Math.random();
let y = H * Math.random();
let angle = 0;
let xSpeed = W * (Math.random() - 0.5);
let ySpeed = H * (Math.random() - 0.5);
let rotationSpeed = 2 * Math.PI * (Math.random() - 0.5);


function draw(ctx, guide) {
  if (guide) drawGrid(ctx);
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  drawAsteroid(ctx, radius, shape, {guide: guide, noise: noise});
  ctx.restore();
}


function drawAsteroid(ctx, r, shape, options) {
  ctx, options = setOptions(ctx, options);
  ctx.save();
  ctx.beginPath();
  for (let i = 0; i < shape.length; i++) {
    ctx.rotate(2 * Math.PI / shape.length);
    ctx.lineTo(r + r*options.noise*shape[i], 0);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  if (options.guide) drawGuide(ctx, r, options);
  ctx.restore();
}


function setOptions(ctx, options) {
  options = options || {};
  ctx.strokeStyle = options.stroke || 'white';
  ctx.fillStyle = options.fill || 'black';
  options.guide = options.guide || true;
  return ctx, options;
}


function drawGuide(ctx, r, options) {
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.lineWidth = 0.2;
  ctx.beginPath();
  ctx.arc(0, 0, r + r*options.noise, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, r - r*options.noise, 0, 2 * Math.PI);
  ctx.stroke();
}


function update(elapsed) {
  if (x - radius + elapsed*xSpeed > W) x = -radius;
  if (x + radius + elapsed*xSpeed < 0) x = W + radius;
  if (y - radius + elapsed*ySpeed > H) y = -radius;
  if (y + radius + elapsed*ySpeed < 0) y = H + radius;
  x += elapsed * xSpeed;
  y += elapsed * ySpeed;
  angle = (angle + elapsed*rotationSpeed) % (2 * Math.PI);
}


// Game loop
let prev, elapsed;

function frame(timestamp) {
  ctx.clearRect(0, 0, W, H);
  if (!prev) prev = timestamp; // prev = prev || timesamp
  elapsed = timestamp - prev;
  update(elapsed / 1000);
  draw(ctx, true);
  prev = timestamp;
  window.requestAnimationFrame(frame);
}


window.requestAnimationFrame(frame);
