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

  static parse(s) {
    let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
    if (!matches) throw new TypeError(`Cannot parse Range from "${s}".`);
    return new Range2(parseInt(matches[1]), parseInt(matches[2]));
  }
}


// 1. Subclasses and Prototypes
function Span(start, span) {
  if (span >= 0) {
    this.from = start;
    this.to = start + span;
  } else {
    this.to = start;
    this.from = start + span;
  }
}


Span.prototype = Object.create(Range.prototype);
// Don't want to inherit Range.prototype.constrcutor so
Span.prototype.constructor = Span;
// Override
Span.prototype.toString = function() {
  return `(${this.from}... +${this.to - this.from})`;
};



// 2. Subclasses with extend and super
class EZArray extends Array {
  get first() { return this[0]; }
  get last() { return this[this.length - 1]; }
}

let a = new EZArray();
console.log(a instanceof EZArray); // true
console.log(a instanceof Array);   // true
a.push(1, 2, 3, 4);
a.pop();
console.log(a.first);              // 1
console.log(a.last);               // 3
console.log(a[1]);                 // 2
console.log(Array.isArray(a));     // true
console.log(EZArray.isArray(a));   // true
console.log(Array.prototype.isPrototypeOf(EZArray.prototype)); // true
console.log(Array.isPrototypeOf(EZArray));                     // true


class TypedMap extends Map {
  constructor(keyType, valueType, entries) {
    if (entries) {
      for (let [k, v] of entries) {
        if (typeof k !== keyType || typeof v !== valueType) {
          throw new TypeError(`Wrong type for entry [${k}, ${v}]`);
        }
      }
    }
    super(entries);
    this.keyType = keyType;
    this.valueType = valueType;
  }

  set(key, value) {
    if (this.keyType && typeof key !=== this.keyType) {
      throw new TypeError(`${key} is not of type ${this.keyType}`);
    }
    if (this.valueType && typeof value !== this.valueType) {
      throw new TypeError(`${value} is not of type ${this.valueType}`);
    }
    return super.set(key, value);
  }
}

