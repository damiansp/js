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



// 3. Delegation Instead of Inheritance

/**
 * A Set-like class that keeps track of how many times a value has
 * been added. Call add() and remove() like you would for a Set, and
 * call count() to find out how many times a given value has been added.
 * The default iterator yields the values that have been added at least
 * once. Use entries() if you want to iterate [value, count] pairs.
 */
class Histogram {
  // To initialize, we just create a Map object to delegate to
  constructor() { this.map = new Map(); }

  // For any given key, the count is the value in the Map, or zero if the key
  // does not appear in the Map.
  count(key) { return this.map.get(key) || 0; }

  // The Set-like method has() returns true if the count is non-zero
  has(key) { return this.count(key) > 0; }

  // The size of the histogram is just the number of entries in the Map.
  get size() { return this.map.size; }

  // To add a key, just increment its count in the Map.
  add(key) { this.map.set(key, this.count(key) + 1); }

  // Deleting a key is a little trickier because we have to delete the key from
  // the Map if the count goes back down to zero.
  delete(key) {
    let count = this.count(key);
    if (count === 1) this.map.delete(key);
    else if (count > 1) this.map.set(key, count - 1);
  }

  // Iterating a Histogram just returns the keys stored in it
  [Symbol.iterator]() { return this.map.keys(); }

  // These other iterator methods just delegate to the Map object
  keys() { return this.map.keys(); }
  
  values() { return this.map.values(); }

  entries() { return this.map.entries(); }
}
