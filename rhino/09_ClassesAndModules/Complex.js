/* Complex.js: A class to represent complex numbers. */

/*
 * Constructor func defines fields r(eal), and i(maginary) on every instance 
 * created. They are the state of the object.
 */
function Complex(real, imaginary) {
  if (isNaN(real) || isNaN(imaginary)) throw new TypeError();
  this.r = real;
  this.i = imaginary;
}

/*
 * Instance methods of a class are defined as func-valued props of the prototype
 * obj. Methods here inherited by all instances.
 */

Complex.prototype.add = function(that) {
  return new Complex(this.r + that.r, this.i + that.i);
};


Complex.prototype.mult = function(that) {
  return new Complex(this.r*that.r - this.i*that.i,
                     this.r*that.i + this.i*that.r);
};


Complex.prototype.mag = function() {
  return Math.sqrt(this.r*this.r + this.i*this.i);
};


Complex.prototype.neg = function() { return new Complex(-this.r, -this.i); };


Complex.prototyp.conj = function() { return new Complex(this.r, -this.i); };


Complex.prototype.toString = function() {
  return '{' + this.r + ', ' + this.i + '}';
};


Complex.prototype.equals = function(that) {
  return (that != null
          && that.constructor === Complex
          && this.r === that.r
          && this.i === that.i);
};

/*
 * Class fields (such as constants) and class methods are defined as props of 
 * the constructor.  Note that class methods DO NOT generally use "this"
 */
Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);

Complex.parse = function(str) {
  try {
    var m = Complex._format.exec(str);
    return new Complex(parseFloat(m[1]), parseFloat(m[2]));
  } catch (x) {
    throw new TypeError("Can't parse '" + str + "' as a complex number.");
  }
};


Complex._format = /^\{([^,]+), ([^}]+)\}$/;


var c = new Complex(2, 3);      // 2+3i
var d = new Complex(c.i, c.r);  // 3+2i

console.log(c.add(d).toString()); // {5, 5}
console.log(Complex.parse(c.toString()).add(c.neg()).equals(Complex.ZERO)); // t
