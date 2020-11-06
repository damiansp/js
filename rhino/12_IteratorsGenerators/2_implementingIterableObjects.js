/* A Range object represents a range of numbers {x: from <= x <= to}
 * Range defines a has() method for testing whether a given number is a member 
 * of the range.  Range is iterable and iteraes all integers within the range.
 */
class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  // Make a Range act like a Set of numbers
  has(x) { return typeof x === 'number' && this.from <= x && x <= this.to; }

  // Return string representation of the range using set notation
  toString() { return `{x | ${this.from} <= x <= ${this.to}}`; }

  // Make a Range iterable by returning an iterator object. Note that the name
  // of this method is a special symbol, not a string.
  [Symbol.iterator]() {
    // Each iterator instance must iterate the range independently of others. So
    // we need a state var to track our location in the iteration.  We start at
    // the first int >= from
    let next = Math.ceil(this.from);
    let last = this.to;
    return {
      // Having a next() method is what makes this an iterator. It must return
      // an iterator result obj
      next() {
        return (next <= last) ? {value: next++} : {done: true};
      },

      // As a convenience, make the iterator itself iterable
      [Symbol.iterator]() { return this; }
    };
  }
}

for (let x of new Range(1, 10)) { console.log(x); }
console.log([...new Range(-2, 3)]);
