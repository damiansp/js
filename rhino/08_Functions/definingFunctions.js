function printProps(o) {
  for (var p in o) console.log(p + ": " + o[p] + "\n");
}


function distance(x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;
  return Math.sqrt(dx*dx + dy*dy);
}


function factorial(x) {
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}

var square = function(x) { return x*x; };
var tenSquared = function(x) { return x*x; }(10);

console.log(square(3));
console.log(tenSquared);
