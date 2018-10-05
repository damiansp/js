// forEach
var data = [1, 2, 3, 4, 5];
var sum = 0;
data.forEach(function(x) { sum += x; });
console.log(sum); // 15

data.forEach(function(x, i, self) { self[i] = x + 1; });
console.log(data); // [2, 3, 4, 5, 6]


// map
b = data.map(function(x) { return x * x; });
console.log(b); // [4, 9, 16, 25, 36];


// filter
var evenBs = b.filter(function(x) { return x % 2 == 0; });
console.log(evenBs); // [4, 16, 36]


