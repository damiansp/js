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

// Prototype chain from Bird to Animal


var animal = new Animal('elephant');
animal.walk('Amboseli');

var bird = new Bird('sparrow');

