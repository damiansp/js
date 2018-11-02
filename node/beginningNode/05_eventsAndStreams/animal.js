function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function(destination) {
  console.log(this.name, 'is walking to', destination);
};


function Bird(name) {
  // Call Animal constructor
  Animal.call(this, name);
}

Bird.prototype.__proto__ = Animal.prototype;
Bird.prototype.fly = function(destination) {
  console.log(this.name, 'is flying to', destination);
}

// Prototype chain from Bird to Animal


var animal = new Animal('elephant');
animal.walk('Amboseli');

var bird = new Bird('sparrow');
bird.walk('the feeder');
bird.fly('Alaska');


