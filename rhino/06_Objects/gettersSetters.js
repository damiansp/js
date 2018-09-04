/* Syntax:
 * var o = {// Ordinary data property
 *          data_prop: 'value',
 *
 *          // An accessor property defined as a pair of functions
 *          get accessor_prop() {},
 *          set accessor_prop() {}};
 */

var p = {x: 1.0,
         y: 1.0,
         get r() { return Math.sqrt(this.x*this.x + this.y*this.y); },
         set r(newRadius) {
           var oldRadius = Math.sqrt(this.x*this.x + this.y*this.y);
           var ratio = newRadius / oldRadius;
           this.x *= ratio;
           this.y *= ratio;},
         get theta() { return Math.atan2(this.y, this.x); }};

function inherit(p) {
  if (p == null) { throw TypeError(); } // p must be non-null
  if (Object.create) { return Object.create(p); }
  var t = typeof p;
  if (t !== 'object' && t !== 'function') { throw TypeError(); }
  function f() {};  // dummy constructor function
  f.prototype = p;
  return new f();
}

var q = inherit(p);
q.x = 1;
q.y = 1;
console.log(q.r);
console.log(q.theta);


var serialNum = {$n: 0, // $ marks prop as private
                 get next() { return this.$n++; },
                 set next(n) {
                   if (n >= this.$n) { this.$n = n; }
                   else throw "serial number can only be set to a larger value";
                 }};

var random = {get octet()  { return Math.floor(Math.random()*256); },
              get uint16() { return Math.floor(Math.random()*65536); },
              get int16()  { return Math.floor(Math.random()*65536) - 32768; }};

                 
  
