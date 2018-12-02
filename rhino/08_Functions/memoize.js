function memoize(f) {
  var cache = {};
  return function() {
    var key = arguments.length + Array.prototype.join.call(arguments, ',');
    if (key in cache) return cache[key];
    else return cache[key] = f.apply(this, arguments);
  };
}


function gcd(a, b) {
  var t;
  if (a < b) t = b, b = a, a = t; // ensure a > b
  while (b != 0) t = b, b = a % b, a = t; // Euclid's algo
  return a;
}

var gcdMemo = memoize(gcd);
console.log(gcd(85, 187));


var factorial = memoize(
  function(n) { return (n <= 1) ? 1 : n * factorial(n - 1); });

console.log(factorial(5));
