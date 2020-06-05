// 1. Array Literals
let empty = [];
let primes = [2, 3, 5, 7, 11];
let misc = [1, 2.2, true, "a",];
let base = 2;
let table = [base, base^2, base^3, base^4];
let b = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]];
let count = [1, , 3];
let undefs = [, , ]; // length = 2(!)
console.log(undefs.length);



// 2. Spread
let a = [1, 2, 3];
let c = [0, ...a, 4];
console.log(c); // [0, 1, 2, 3, 4]

let original = [1, 2, 3];
let copy = [...original];
let badCopy = original;
copy[0] = 0;
console.log(original); // [1, 2, 3]
badCopy[0] = 9;
console.log(original); // [9, 2, 3]

let hexdigits = [..."0123456789ABCDEF"];
console.log(hexdigits); // ['0', '1', '2', ..., 'F']

let letters = [..."hello world"];
console.log([...new Set(letters)]); // ['h', 'e', 'l', 'o', ' ', 'w', 'r', 'd']



// 3. Array()
let d = new Array();
let e = new Array(10); // array of length 10
let f = new Array(5, 4, 3, 2, 1, "testing");



// 4. Array.of()
let g = Array.of(); // []
let h = Array.of(10); // [10] (cf. Array(10))
let i = Array.of(1, 2, 3);



// 5. Array.from()
let copy2 = Array.from(original);
// let trueArray = Array.from(arrayLike);

  
  
