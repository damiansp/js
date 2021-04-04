const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const H = canvas.height;
const W = canvas.width;


function setOptions(ctx, options) {
  options = options || {};
  ctx.strokeStyle = options.stroke || 'white';
  ctx.fillStyle = options.fill || 'black';
  options.guide = options.guide || true;
  return ctx, options;
}


function drawGuideBasic(ctx, r) {
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, 2 * Math.PI);
  ctx.stroke();
  return ctx;
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


function Asteroid(segments, radius, noise) {
  this.x = W * Math.random();
  this.y = H * Math.random();
  this.angle = 0;
  this.xSpeed = W * (Math.random() - 0.5);
  this.ySpeed = H * (Math.random() - 0.5);
  this.rotationSpeed = 2 * Math.PI * (Math.random() - 0.5);
  this.radius = radius;
  this.noise = noise;
  this.shape = [];
  for (let i = 0; i < segments; i++) this.shape.push(Math.random() - 0.5);
}


Asteroid.prototype.update = function(elapsed) {
  let dx = elapsed * this.xSpeed;
  let dy = elapsed * this.ySpeed;
  if (this.x - this.radius + dx > W) this.x = -this.radius;
  if (this.x + this.radius + dx < 0) this.x = W + this.radius;
  if (this.y - this.radius + dy > H) this.y = -this.radius;
  if (this.y + this.radius + dy < 0) this.y = H + this.radius;
  this.x += dx;
  this.y += dy;
  this.angle = (this.angle + this.rotationSpeed*elapsed) % (2 * Math.PI);
};


Asteroid.prototype.draw = function(ctx, guide) {
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.rotate(this.angle);
  drawAsteroid(ctx, this.radius, this.shape, {guide: guide, noise: this.noise});
  ctx.restore();
};


let asteroids = [new Asteroid(11, 30, 0.2),
                 new Asteroid(19, 40, 0.3),
                 new Asteroid(24, 50, 0.5)];

  
function draw(ctx, guide) {
  if (guide) drawGrid(ctx);
  asteroids.forEach(function(asteroid) { asteroid.draw(ctx, guide); });
}


function update(elapsed) {
  asteroids.forEach(function(asteroid) {asteroid.update(elapsed); })
}


function drawAsteroidBasic(ctx, r, segments, options) {
  ctx, options = setOptions(ctx, options);
  ctx.save();
  ctx.beginPath();
  for (let i = 0; i < segments; i++) {
    ctx.rotate(2 * Math.PI / segments);
    ctx.lineTo(r, 0);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  if (options.guide) {
    ctx = drawGuide(ctx, r, options);
  }
  ctx.restore()
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


function mainBasic(ctx) {
  let segments = 1;
  for (let x=0.25; x < 1; x += 0.5) {
    for (let y=0.25; y < 1; y += 0.5) {
      segments += 2;
      ctx.save();
      ctx.translate(W * x, H * y);
      drawAsteroid(ctx, 60, segments, {guide: true});
      ctx.restore();
    }
  }
}


let previous, elapsed;


function frame(timestamp) {
  ctx.clearRect(0, 0, W, H);
  if (!previous) previous = timestamp;
  elapsed = timestamp - previous;
  update(elapsed / 1000);
  draw(ctx, true);
  previous = timestamp;
  window.requestAnimationFrame(frame);
}

function main(ctx) {
  window.requestAnimationFrame(frame);
}


main(ctx);
