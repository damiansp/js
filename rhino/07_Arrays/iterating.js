var keys = Object.keys(o);
var values = [];

for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  values[i] = o[key];
}

// for performance, look up length only once
for (var i = 0, len = keys.length; i < len; i++) {
  if (!(a[i])) continue;           // skip null, undef, nonexistant
  if (a[i] == undefined) continue; // skip undef, nonex
  if (!(i in a)) continue;         // skip nonex
}

for (var index in sparseArray) {
  var value = sparseArray[index];
  // ...
}


for (var i in a) {
  if (!a.hasOwnProperty(i)) continue; // skip inherited properties
  // skip i if not non-neg int
  if (String(Math.floor(Math.abs(Number(i)))) !== i) continue; 
}


var data = [1, 2, 3, 4, 5];
var sumOfSquares = 0;
data.forEach(function(x) { sumOfSquares += x*x; });

