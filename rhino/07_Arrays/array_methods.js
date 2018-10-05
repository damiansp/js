var a = [1, 2, 3];
var b = new Array(10);
var froots = ['cherry', 'apple', 'durian', 'banana'];
var nummers = [33, 4, 1111, 222];
var critters = ['ant', 'Bug', 'cat', 'Dog', 'eel', 'Fox'];

// join
console.log(a.join());    // 1,2,3
console.log(a.join(''));  // 123
console.log(b.join('-')); // ---------


// reverse
console.log(a.reverse().join(' ')); // 3 2 1
console.log(a);                     // [3, 2, 1]


// sort
froots.sort();
var s = froots.join(", ");
console.log(s);

console.log(nummers.sort());                    // 1111, 222, 33, 4
nummers.sort(function(a, b) { return a - b; }); // numerical order
console.log(nummers);                           // 4, 33, 222, 1111

console.log(critters.sort()); // caps first
critters.sort(
  function(s, t) {
    var a = s.toLowerCase();
    var b = t.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
console.log(critters);        // case invariant


// concat
console.log(a.concat(4, 5));           // [3, 2, 1, 4, 5]
console.log(a.concat([4, 5]));         // [3, 2, 1, 4, 5]
console.log(a.concat([4, 5], [6, 7])); // [3, 2, 1, 4, 5, 6, 7]
console.log(a.concat(4, [5, [6, 7]])); // [3, 2, 1, 4, 5, [6, 7]]


// slice
var a = ['a', 'b', 'c', 'd', 'e'];
console.log(a.slice(0, 3));   // ['a', 'b', 'c']
console.log(a.slice(3));      // ['d', 'e']
console.log(a.slice(1, -1));  // ['b', 'c', 'd']
console.log(a.slice(-3, -2)); // ['c']


// splice (start, n, insert...)
a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a.splice(4)); // [5, 6, 7, 8]
console.log(a);           // [1, 2, 3, 4]
console.log(a.splice(1, 2)); // [2, 3]
console.log(a);              // [1, 4]

a = [1, 2, 3, 4, 5];
console.log(a.splice(2, 0, 'a', 'b')); // []
console.log(a);                        // [1, 2, 'a', 'b', 3, 4, 5]
console.log(a.splice(2, 2, [1, 2], 3)); // ['a', 'b']
console.log(a);                         // [1, 2, [1, 2], 3, 3, 4, 5]


// push/pop
var stack = [];
console.log(stack.push(1, 2)); // 2
console.log(stack);            // [1, 2]
console.log(stack.pop());      // 2
console.log(stack);            // [1]
console.log(stack.push([4, 5])); // 2 (length of stack)
console.log(stack);              // [1, [4, 5]]


// shift/unshift
a = [];
console.log(a.unshift(1)); // 1 (length of a)
console.log(a);            // [1]
console.log(a.unshift(22)); // 2
console.log(a);             // [22, 1]
console.log(a.shift());     // 22
console.log(a);             // [1]


// toString()
console.log([1, 2, 3].toString()); // '1,2,3'
console.log(['a', 'b', 'c'].toString()); // 'a,b,c'
console.log([1, ['b', 3]].toString());   // '1,b,3'


// every(), some()
a = [1, 2, 3, 4, 5];
console.log(a.every(function(x) { return x < 10; })); // true
console.log(a.every(function(x) { return x % 2 == 0; })); // false
console.log(a.some(function(x) { return x % 2 == 0; }));  // true
console.log(a.some(isNaN));                              // false


// reduce(), reduceRight()
var sum = a.reduce(function(x, y) { return x + y; }, 0);
console.log(sum); // 15
var prod = a.reduce(function(x, y) { return x * y; }, 1);
console.log(prod); // 120
var max = a.reduce(function(x, y) { return (x > y) ? x : y; });
console.log(max); // 5

a = [2, 3, 4];
// 2^(3^4)
var big = a.reduceRight(
  function(accumulator, value) { return Math.pow(value, accumulator); });
console.log(big); // 2.42e24

var objects = [{x: 1, a: 1}, {y: 2, a: 2}, {z: 3, a: 3}];
//var leftUnion = objects.reduce(union);
//console.log(leftUnion);
//var rightUnion = objects.reduceRight(union);
//console.log(rightUnion);


// indexOf(), lastIndexOf()
a = [0, 1, 2, 1, 0];
console.log(a.indexOf(1)); // 1
console.log(a.lastIndexOf(1)); // 3
console.log(a.indexOf(3));     // -1 (no such element)

// Find all occurrences of a value x in an array a and return matching indices
function findall(a, x) {
  var results = [],
    len = a.length,
    pos = 0;
  while(pos < len) {
    pos = a.indexOf(x, pos);
    if (pos === -1) break;
    results.push(pos);
    pos += 1;
  }
  return results;
}
            
  
