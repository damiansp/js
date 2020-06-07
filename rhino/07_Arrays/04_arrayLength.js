console.log([].length); // 0
console.log(['a', 'b', 'c'].length); // 3

let a = [1, 2, 3, 4, 5];
a.length = 3;
console.log(a); // [1, 2, 3]
a.length = 0;
console.log(a); // []
a.length = 5;   // All empty
console.log(a); // [ <5 empty items> ]

