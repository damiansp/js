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
    // Each iterator instance must iterate the range independnently of others. So
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


// Return an iterable obj that iterates the result of applying f() to each val
// of the source iterable
function map(iterable, f) {
  let iterator = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator]() { return this; },
    next() {
      let v = iterator.next();
      if (v.done) return v;
      return {value: f(v.value)};
    }
  };
}

console.log([...map(new Range(1, 4), x => x*x)]); // 1 4 9 16


// Return an iterable obj that filters the specified iterable, iterating only
// those elements for which the predicate is true
function filter(iterable, predicate) {
  let iterator = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator]() { return this; },
    next() {
      for (;;) {
        let v = iterator.next();
        if (v.done || predicate(v.value)) return v;
      }
    }
  };
}

console.log([...filter(new Range(1, 10), x => x % 3 === 0)]); // 3 6 9


function words(s) {
  var r = /\s+|$/g; // one or more spaces or end
  r.lastIndex = s.match(/[^ ]/).index; // start at first non-space
  return {
    [Symbol.iterator]() { return this; },
    next() {
      let start = r.lastIndex;
      if (start < s.length) {
        let match = r.exec(s);
        if (match) { return {value: s.substring(start, match.index)}; }
      }
      return {done: true};
    }
  };
}

console.log([...words('  abc def ghi! j.k  ')]); // [abc def ghi! j.k]

