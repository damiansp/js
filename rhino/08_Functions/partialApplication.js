function array(a, n) { return Array.prototype.slice.call(a, n || 0); }

function partialLeft(f /*, ...*/) {
  var args = arguments;
  return function() {
    var a = array(args, 1);
    a = a.concat(array(arguments));
    return f.apply(this, a);
  };
}

function partialRight(f /*...*/) {
  var args = arguments;
  return function () {
    var a = array(arguments);
    a = a.concat(array(args, 1));
    return f.apply(this, a);
  };
}

function partial(f /* ... */) {
  var args = arguments;
  return function() {
    var a = array(args, 1);
    var i = 0,
      j = 0;
    for (; i < a.length; i++) {
      if (a[i] === undefined) a[i] = arguments[j++];
    }
    a = a.concat(array(arguments, j));
    return f.apply(this, a);
  }
}

var f = function(x, y, z) { return x*(y - z); };
console.log(partialLeft(f, 2)(3, 4));        // -2 = 2 * (3 - 4)
console.log(partialRight(f, 2)(3, 4));       // 6  = 3 * (4 - 2)
console.log(partial(f, undefined, 2)(3, 4)); // -6 = 3 * (2 - 4)
  
var increment = partialLeft(sum, 1);
var cuberoot = partialRight(Math.pow, 1/3);
String.prototype.first = partial(String.prototype.charat, 0);
String.prototype.last = partial(String.prototype.substr, -1, 1);

var not = partialLeft(compose, function(x) { return !x; });
var even = function(x) { return x % 2 == 0; };
var odd = not(even);
var isNumber = not(isNaN);

var data = [1, 1, 3, 5, 5];
var sum = function(x, y) { return x + y; };
var product = function(x, y) { return x * y; };
var neg = partial(product, -1);
var square = partial(Math.pow, undefined, 2);
var sqrt = partial(Math.pow, undefined, 0.5);
var reciprocal = partial(Math.pow, undefined, -1);
var mean = product(reduce(data, sum), reciprocal(data.length));
var stddev = sqrt(product(
  reduce(
    map(data,
        compose(square,
                partial(sum, neg(mean)))),
    sum),
  reciprocal(sum(data.length, -1))));
console.log(mean, stddev);
