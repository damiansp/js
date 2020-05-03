function Particle(pname) {
  this.name = pname;
  this.move = function() { console.log(this.name + " is moving"); }
}

Particle.lifetime = 100;
Particle.prototype.mass = 1;

Particle.prototype.stop = function() {
  console.log(this.name + " has stopped");
}

particle1 = new Particle("electron");
particle1.spin = 0;

console.log(particle1.name);
console.log(particle1.mass);
particle1.move();
particle1.stop();
