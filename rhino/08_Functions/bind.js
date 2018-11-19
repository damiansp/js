function f(y) { return this.x + y; }

var o = {x: 1};
var g = f.bind(o);
console.log(g(2)); // NaN


function bind(f, o) {
  if (f.bind) return f.bind(o);
  else return function() { return f.apply(o, arguments); };
}


var sum = function(x, y) { return x + y; };
var succ = sum.bind(null, 1);
console.log(succ(2)); // 3

function f(y, z) { return this.x + y + z }
var g = f.bind({x: 1}, 2);
console.log(g(3)); // 6 (this.x: 1 + y: 2 + z: 3)
