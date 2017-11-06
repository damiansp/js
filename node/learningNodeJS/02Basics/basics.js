/* Arrow Functions */
var x = function(a, b) { return a + b; };
var x2 = (a, b) => a + b;

/* for...in syntax */
var user = { firstName: 'marcus',
             lastName: 'aurelius',
             age: 1984,
             occupation: 'caesar' };
for (key in user) { console.log(key); }

/* for...of syntax */
function addNIterable() {
  var sum = 0;

  for (x of arguments) {
    sum += x;
  }
  return sum;
}

addNIterable(1, 1, 2, 3, 5, 8, 13);


/* Classes, Prototypes, Inheritance */
// Classes declared as functions
function Shape() {
  this.X = 0;
  this.Y = 0;

  this.move = function(x, y) {
    this.X = x;
    this.Y = y;
  }

  this.distanceFromOrigin = function() {
    return Math.sqrt(this.X * this.X + this.Y * this.Y);
  }
}

var s = new Shape();
s.move(3, 4);
console.log(s.distanceFromOrigin());

// add new properties:
s.FillColor = 'red';


// Protypes/Inheritance
function Shape() {};

Shape.prototype.X = 0;
Shape.prototype.Y = 0;
Shape.prototype.move = function(x, y) {
  this.X = x;
  this.Y = y;
};
Shape.prototype.distanceFromOrigin = function() {
  return Math.sqrt(this.X * this.X + this.Y * this.Y);
}
Shape.prototype.area = function() {
  throw new Error("I don't have a form yet");
};

var s = new Shape();
s.move(3, 4);
console.log(s.distanceFromOrigin());
console.log(s.area());

function Square() {};
Square.prototype = new Shape();
Square.prototype.__proto__ = Shape.prototype; // like extends in C/Java
Square.prototype.Width = 0;
Square.prototype.area = function() {
  return this.Width * this.Width;
};

var sq = new Square();
sq.move(-3, -4);
sq.Width = 5;
console.log(sq.area());
console.log(sq.distanceFromOrigin());

function Rectangle() {};
Rectangle.prototype.__proto__ = Square.prototype;
Rectangle.prototype.Height = 0;
Rectangle.prototype.area = function() {
  return this.Height * this.Width;
};

var rect = new Rectangle();
rect.move(11, 7);
rect.Width = 10;
rect.Height = 5;
console.log(rect.area());
console.log(rect.distanceFromOrigin());
