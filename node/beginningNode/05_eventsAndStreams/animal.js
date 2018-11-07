var inherits = require('util').inherits;

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
Bird.prototype.__proto__ = Animal.prototype;
Bird.prototype.fly = function(destination) {
  console.log(this.name, 'is flying to', destination);
};


function Frog(name) {
  Animal.call(this, name);
}

inherits(Frog, Animal); 
Frog.prototype.jump = function(destination) {
  console.log(this.name, 'is jumping to', destination);
};

function Weasel(name) {
  this.name = name;
}
Weasel.prototype = Object.create(
  Animal.prototype,
  {constructor: {value: Weasel,
                 enumerable: false,
                 writable: true,
                 configurable: true}});
Weasel.prototype.scurry = function(destination) {
  console.log(this.name, 'is scurrying to', destination);
};


var animal = new Animal('elephant');
animal.walk('Amboseli');

var bird = new Bird('sparrow');
bird.walk('the feeder');
bird.fly('Alaska');

var frog = new Frog('R. pipens');
frog.walk('the pond');
frog.jump('the brush');

var weasel = new Weasel('Martin Fisher');
weasel.walk('the dam');
weasel.scurry('the lodge');
console.log(weasel.constructor === Weasel); // true
