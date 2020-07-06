function Ball(radius=20, color='#00F', mass=1, charge=0, gradient=false) {
  this.radius = radius;
  this.color = color;
  this.mass = mass;
  this.charge = charge;
  this.gradient = gradient;
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
}

Ball.prototype = Object.create(Particle.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.draw = function(context) {
  if (this.gradient) 
    grad = context.createRadialGradient(
      this.x, this.y, 0, this.x, this.y, this.radius);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(1, this.color);
    context.fillStyle = grad;
  } else context.fillStyle = this.color;
  context.beginPath();
  context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
  context.closePath();
  context.fill();
};
