function Particle(pname) {
  this.name = pname;
  this.move = function() { console.log(this.name + " is moving"); }
}

particle1 = new Particle("electron");
console.log(particle1.name);
particle1.move();
