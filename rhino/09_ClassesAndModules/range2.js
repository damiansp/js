// Constructor initializes Range objects. It does not create or return the obj,
// just initializes "this"
function Range(from, to) {
  // Noninherited properties unique to "this" obj
  this.from = from;
  this.to = to;
}

// All Range objs inherit from this obj.
Range.prototype = {
  includes: function(x) { return this.from <= x && x <= this.to; },
  foreach: function(f) {
    for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
  },
  toString: function() { return '(' + this.from + '...' + this.to + ')'; }
};

var r = new Range(2, 7);
console.log(r.includes(5));
r.foreach(console.log);
console.log(r);
console.log(r.toString());
  
