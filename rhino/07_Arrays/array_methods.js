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

