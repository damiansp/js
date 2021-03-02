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
let asteroid = {segments: 24,
                shape: [],
                radius: 50,
                noise: 0.5,
                x: W * (Math.random() - 0.5),
                y: H * (Math.random() - 0.5),
                angle: 0,
                xSpeed: W * (Math.random() - 0.5),
                ySpeed: H * (Math.random() - 0.5),
                rotationSpeed: 2 * Math.PI * (Math.random() - 0.5)};

for (let i = 0; i < asteroid.segments; i++) {
  asteroid.shape.push(Math.random() - 0.5);
}


function draw(ctx, guide) {
  if (guide) drawGrid(ctx);
  ctx.save();
  ctx.translate(asteroid.x, asteroid.y);
  ctx.rotate(asteroid.angle);
  drawAsteroid(ctx,
               asteroid.radius,
               asteroid.shape,
               {guide: guide, noise: asteroid.noise});
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
  if (asteroid.x - asteroid.radius + elapsed*asteroid.xSpeed > W) {
    asteroid.x = -asteroid.radius;
  }
  if (asteroid.x + asteroid.radius + elapsed*asteroid.xSpeed < 0) {
    asteroid.x = W + asteroid.radius;
  }
  if (asteroid.y - asteroid.radius + elapsed*asteroid.ySpeed > H) {
    asteroid.y = -asteroid.radius;
  }
  if (asteroid.y + asteroid.radius + elapsed*asteroid.ySpeed < 0) {
    asteroid.y = H + asteroid.radius;
  }
  asteroid.x += elapsed * asteroid.xSpeed;
  asteroid.y += elapsed * asteroid.ySpeed;
  asteroid.angle = ((asteroid.angle + elapsed*asteroid.rotationSpeed)
                    % (2 * Math.PI));
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
