var data = [1, 1, 3, 5, 5];
var total = 0;

for (var i = 0; i < data.length; i++) total += data[i];

var mean = total / data.length;

total = 0;
for (var i = 0; i < data.length; i++) {
  var deviation = data[i] - mean;
  total += deviation * deviation;
}

var sd = Math.sqrt(total / (data.length - 1));
console.log('mean: ' + mean + '\nsd: ' + sd);

// As above but with a functional programming style
var sum = function(x, y) { return x + y; };
var square = function(x) { return x * x; };
var mean = data.reduce(sum) / data.length;
var deviations = data.map(function(x) { return x - mean; });
var sd = Math.sqrt(deviations.map(square).reduce(sum) / (data.length - 1));
console.log('mean: ' + mean + '\nsd: ' + sd);
