/**
 * Return the sum of the elements of array (or array-like object) 'a'.  The 
 * elements of 'a' must all be numbers; null and undefined are ignored.
 */
function sum(a) {
  if (isArrayLike(a)) {
    var total = 0;
    for (var i = 0; i < a.length; i++) {
      var element = a[i];
      if (element == null) continue;
      if (isFinite(element)) total += element;
      else throw new Error("sum(): elements must be finite numbers");
    }
    return total;
  } else throw new Error("sum(): argument must be array-like");
}
