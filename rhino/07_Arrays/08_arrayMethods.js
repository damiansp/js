// 1. Array Iterator Methods

// forEach()
let data = [1, 2, 3, 4, 5],
  sum = 0;

data.forEach(val => { sum += val; });
console.log(sum); // 15

data.forEach(function(v, i, a) { a[i] = ++v; });
console.log(data); // 2, 3, 4, 5, 6


// map()
let squares = data.map(x => x*x);
console.log(squares); // 4, 9, 16, 25, 36


// filter()
let lessThan5 = data.filter(x => x < 5);
console.log(lessThan5); // 2, 3, 4

let a = [1, 1, 2, 3, 5, 8, 13];
let evens = a.filter(x => x % 2 === 0);
let everyOther = a.filter((x, i) => i % 2 === 0);
console.log(evens);      // 2, 8
console.log(everyOther); // 1, 2, 5, 13


// find(), findIndex()
console.log(a.findIndex(x => x === 3)); // 3
console.log(a.findIndex(x => x < 1));   // -1 (not found)
console.log(a.find(x => x % 5 === 0));  // 5
console.log(a.find(x => x % 2 === 0));  // 2 (first only -- no 8)
console.log(a.find(x => x < 0));        // undefined


// every(), some()
console.log(a.every(x => x < 20));      // true
console.log(a.every(x => x % 2 === 0)); // false
console.log(a.some(x => x > 20));       // false
console.log(a.some(x => x % 2 === 0));  // true


// reduce(), reduceRight()
console.log(a.reduce((x, y) => x + y, 0));        // 33 (sum)
console.log(a.reduce((x, y) => x * y, 1));        // 3120 (product)
console.log(a.reduce((x, y) => (x > y) ? x : y)); // 13 (max)

let b = [4, 3, 2];
console.log(b.reduceRight((acc, val) => Math.pow(val, acc))); // 4^(3^2)



// 2. Flattening with flat(), flatMap()
console.log([1, [2, 3]].flat());   // [1, 2, 3]
console.log([1, [2, [3]]].flat()); // [1, 2, [3]]

let c = [1, [2, [3, [4]]]];
console.log(c.flat(1)); // [1, 2, [3, [4]]]
console.log(c.flat(2)); // [1, 2, 3, [4]]
console.log(c.flat(3)); // [1, 2, 3, 4]

let phrases = ["hello world", "hi earth"];
let words = phrases.flatMap(phrase => phrase.split(' '));
console.log(words); // ['hello', 'world', 'hi', 'earth']
console.log(phrases.map(phrase => phrase.split(' ')).flat()); // same

// map non-negatives to their sq.roots
console.log(
  [-9, -4, -1, 1, 4, 9].flatMap(x => x < 0 ? [] : Math.sqrt(x))); // 1, 2, 3

