class Range {
  constructor(from, to) {
    // Store state of new object; noninherited properties unique to this obj
    this.from = from;
    this.to = to;
  }

  includes(x) { return this.from <= x && x <= this.to; }

  // Generator func that makes instances iterable (numeric ranges only)
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }

  toString() { return `(${this.from}...${this.to})`; }
}

let r = new Range(1, 3);
console.log(r.includes(2)); // true
console.log(r.toString());  // (1...3)
console.log([...r]);        // [1, 2, 3]


// Span is like range but init w/ start and length instead of start/end
class Span extends Range {
  constructor(start, len) {
    if (len >= 0) super(start, start + len - 1);
    else super(start + len - 1, start);
  }
}


let s = new Span(2, 5);
console.log(s.includes(3)); // true
console.log(s.toString());  // (2...6)
console.log([...s]);        // [2, 3, 4, 5, 6]


let square = function(x) { return x * x; };
console.log(square(3)); // 9

let Square = class { constructor(x) { this.area = x * x; }};
console.log(new Square(3).area); // 9



// 1. Static Methods
class Range2 {
  constructor(from, to) {
    // Store state of new object; noninherited properties unique to this obj
    this.from = from;
    this.to = to;
  }

  includes(x) { return this.from <= x && x <= this.to; }

  // Generator func that makes instances iterable (numeric ranges only)
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }

  toString() { return `(${this.from}...${this.to})`; }

  static parse(s) {
    let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
    if (!matches) throw new TypeError(`Cannot parse Range from "${s}".`);
    return new Range2(parseInt(matches[1]), parseInt(matches[2]));
  }
}

let r2 = Range2.parse('(1...10)'); // (1...10)
console.log(r2.toString());
//console.log(r2.parse('(1...10')); // err parse is prop of class, not instance



// 3. Public, Private, and Static Fields
class Buffer {
  constructor() {
    this.size = 0;
    this.capacity = 4096;
    this.buffer = new Uint8Array(this.capacity);
  }
}

/* Not yet standard...
// with new instance field syntax:
class Buffer2 {
  size = 0;
  capacity = 4096;
  buffer = new Uint8Array(this.capacity);
}

// private vars
class Buffer3 {
  #size = 0;
  get size() { return this.#size; }
}


class Range3 {
  constructor(from, to) {
    // Store state of new object; noninherited properties unique to this obj
    this.from = from;
    this.to = to;
  }

  includes(x) { return this.from <= x && x <= this.to; }

  // Generator func that makes instances iterable (numeric ranges only)
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }

  toString() { return `(${this.from}...${this.to})`; }

  static integerRangePattern = /^\((\d+)\.\.\.(\d+)\)$/;
  static parse(s) {
    let matches = s.match(Range3.integerRangePattern);
    if (!matches) throw new TypeError(`Cannot parse Range from "${s}".`);
    return new Range2(parseInt(matches[1]), parseInt(matches[2]));
  }
}
... */



// 4. Example ComplexNumber Class
