var empty = [];
var primes = [2, 3, 5, 7, 11];
var misc = [1.1, true, 'a'];

var base = 1024;
var table = [base, base + 1, base + 2];
var b = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]];

var count = [1, , 3]; // count[1]: undefined
var undefs = [, , ];  // note trailing commas allowed, so lenght is 2 not 3

var a = new Array();
var c = new Array(10); // length = 10
var why = new Array(5, 4, 3, 'testing'); // same as [5, 4, 3, 'testing']



// read/write
var a = ['world'];
var val = a[0];
a[1] = 3.14;
var i = 2;
a[i] = 3;
a[i + 1] = 'hello';
a[a[i]] = a[0];
console.log(a, a.length); // ['world', 3.14, 3, 'world'], 4

o = {};
o[1] = 'one';
console.log(o); // {'1': 'one'}

a[-1.23] = true;
a['10'] = 0;
console.log(a[1.000]); // sameas a[1]
console.log(a); // ['world', 3.14, 3, 'world', , , , , , 0, '-1.23': true]

