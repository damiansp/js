function inherit(p) {
  if (p == null) { throw TypeError(); } // p must be non-null
  if (Object.create) { return Object.create(p); }
  var t = typeof p;
  if (t !== 'object' && t !== 'function') { throw TypeError(); }
  function f() {};  // dummy constructor function
  f.prototype = p;
  return new f();
}


// Class representing a range of values

// Factory function that returns a new range
function range(from, to) {
  // Use inherit() to create an obj that inherits from the prototype
  var r = inherit(range.methods);

  // non-inherited properties unique to this obj
  r.from = from;
  r.to = to;
  return r;
}

// Prototype obj defines methods inherited by all range objects
range.methods = {
  includes: function(x) { return this.from <= x && x <= this.to; },
  foreach: function(f) {
    for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
  },
  toString: function() { return '(' + this.from + '...' + this.to + ')'; }
};


var r = range(2, 7);
console.log(r.includes(4)); // true
r.foreach(console.log);
console.log(r.toString()); // (2...7)
