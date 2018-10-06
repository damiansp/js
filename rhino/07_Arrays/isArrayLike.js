/* Determine if o is an array-like object.
 * Strings and functions have numeric length properties, but are excluded by the
 * typeof test.  In client-side JS, DOM text nodes hava a numeric length prop, 
 * and may need to be excluded w an additional o.nodeType != 3 test.
 */
function isArrayLike(o) {
  if (o
      && typeof o === 'object'
      && isFinite(o.length)
      && o.length >= 0
      && o.length === Math.floor(o.length)
      && o.length < 4294967296) return true;
  else return false;
}


var a = {'0': 'a', '1': 'b', '2': 'c', length: 3};
console.log(Array.prototype.join.call(a, '+'));
console.log(Array.prototype.slice.call(a, 0));
console.log(
  Array.prototype.map.call(a, function(x) { return x.toUpperCase(); }));
