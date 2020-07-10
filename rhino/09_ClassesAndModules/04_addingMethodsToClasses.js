// From previous:
class Complex {
  constructor(real, imaginary) {
    this.r = real;
    this.i = imaginary;
  }

  plus(that) { return new Complex(this.r + that.r, this.i + that.i); }

  times(that) {
    return new Complex(this.r*that.r - this.i*that.i,
                       this.r*that.i + this.i*that.r);
  }

  static sum(c, d) { return c.plus(d); }
  static product(c, d) { return c.times(d); }

  get real() { return this.r; }
  get imaginary() { return this.i; }
  get magnitude() { return Math.hypot(this.r, this.i); }

  toString() { return `{${this.r}, ${this.i}}`; }

  equals(that) {
    return that instanceof Complex
      && this.r === that.r
      && this.i === that.i;
  }
}

Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);


Complex.prototype.conj = function() { return new Complex(this.r, -this.r); };

// if new String method startsWith() not already defined...
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(s) { return this.indexOf(s) === 0; }
}

// Invoke f this many times
Number.prototype.times = function(f, context) {
  let n = this.valueOf();
  for (let i = 0; i < n; i++) f.call(context, i);
};

let n = 3;
n.times(i => { console.log(`hello ${i}`); });
