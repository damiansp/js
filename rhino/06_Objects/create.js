var o1 = Object.create({x: 1, y: 2});
var o2 = Object.create(null);
var o3 = Object.create(Object.prototype); // like = {} or = new Object();

function inherit(p) {
  if (p == null) { throw TypeError(); } // p must be non-null
  if (Object.create) { return Object.create(p); }
  var t = typeof p;
  if (t !== 'object' && t !== 'function') { throw TypeError(); }
  function f() {};  // dummy constructor function
  f.prototype = p;
  return new f();
}

