function range(from, to) {
  /* Use Object.create() to create an obj that inherits from the prototype obj
   * defined below.  The prototype obj is stored as a prop of this func, and
   * defines the shared methods (behavior) for all range objs.
   */
  let r = Object.create(range.methods);

  /* Store the start adn end points (state) of this new range obj. These are
   * non-inherited props that are unique to this obj.
   */
  r.from = from;
  r.to = to;
  return r;  
}


// This prototype obj defines methods inherited by all range objs.
range.methods = {
  // Return true if x is in range, else false
  // This method works for textual and Date ranges as well as numerics.
  includes(x) { return this.from <= x && x <= this.to; },

  // A generator function that makes instances of the class iterable.
  // Note that it only works for numeric ranges.
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },

  // Return a string representation of the range
  toString() { return '(' + this.from + '...' + this.to + ')'; }
};


let r = range(1, 3);
console.log(r.includes(2)); // true
console.log(r.toString());  // (1...3)
console.log([...r]);        // [1, 2, 3]
