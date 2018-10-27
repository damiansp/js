function f(x, y, z) {
  // Verify no. of args
  var nArgs = arguments.length;
  if (nArgs != 3) {
    throw new Error("f called with " + nArgs + "args, but 3 expected.");
  }
}

//console.log(f(1, 2, 3, 4));

              
function max(/* ... */) {
  var max = Number.NEGATIVE_INFINITY;
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) max = arguments[i];
  }
  return max;
}

console.log(max(1, 10, 100, 1000, 999, 99, 9));


function g(x) {
  console.log(x);
  arguments[0] = null; // changes x!
  return x;
}

console.log(g(6)); // null
