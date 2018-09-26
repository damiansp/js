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
  
