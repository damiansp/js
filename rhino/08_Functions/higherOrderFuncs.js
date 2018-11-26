function not(f) {
  return function() {
    var result = f.apply(this.arguments);
    return !result;
  };
}

var even = function(x) { return x % 2 === 0; }
var odd = not(even);
console.log([1, 1, 3, 5, 5].every(odd)); // true


/**
function mapper(f) { return function(a) { return map(a, f); }};

var increment = function(x) { return x + 1; };
var incrementer = mapper(increment);
console.log(incrementer([1, 2, 3]))
*/

function compose(f, g) {
  return function() { return f.call(this, g.apply(this, arguments)); }
}

var square = function(x) { return x * x; };
var sum = function(x, y) { return x + y; };
var sumOfSquares = compose(sum, square);
console.log(sumOfSquares(2, 3));
  



  
