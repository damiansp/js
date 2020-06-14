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



// 3. Adding Arrays with concat()
let d = [1, 2, 3];
d = d.concat(4, 5); // [1, 2, 3, 4, 5]
d = d.concat([4, 5], [6, 7]); // [1, 2, 3, 4, 5, 4, 5, 6, 7]
d = d.concat(4, [5, [6, 7]]);
console.log(d); // [1, 2, 3, 4, 5, 4, 5, 6, 7, 4, 5, [6, 7]]



// 4. push(), pop(), shift(), unshift()
let stack = [];
stack.push(1, 2); // [1, 2]
stack.pop();      // [1] (returns 2)
stack.push(3);    // [1, 3]
stack.push([4, 5]); // [1, 3, [4, 5]]
console.log(stack.pop()); // [4, 5]
console.log(stack);       // [1, 3]

let q = [];
q.push(1, 2); // [1, 2]
console.log(q.shift()); //  1
console.log(q);         // [2]
q.push(3);
console.log(q);         // [2, 3]

let e = [];
e.unshift(1); // [1]
e.unshift(2); // [2, 1]
e.unshift(3, 4);
console.log(e); // [3, 4, 2, 1]



// 5. slice(), splice(), fill(), copyWithin()
// slice()
let f = [1, 2, 3, 4, 5];
console.log(f.slice(0, 3)); // returns [1, 2, 3]
console.log(f);             // [1, 2, 3, 4, 5]
console.log(f.slice(3));    // [4, 5]
console.log(f.slice(1, -1)); // [2, 3, 4]
console.log(f.slice(-4, -2)); // [2, 3]

// splice()
let g = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(g.splice(4)); // [5, 6, 7, 8]
console.log(g);           // [1, 2, 3, 4]
console.log(g.splice(1, 2)); // [2, 3]
console.log(g);              // [1, 4]
console.log(g.splice(1, 1)); // [4]

let h = [1, 2, 3, 4, 5];
console.log(h.splice(2, 0, "a", "b")); // []
console.log(h);                        // [1, 2, "a", "b", 3, 4, 5]
console.log(h.splice(2, 2, [1, 2], 3)); // ["a", "b"]
console.log(h);                         // [1, 2, [1, 2], 3, 3, 4, 5]

// fill()
let i = new Array(5);
i.fill(0);
console.log(i); // [0, 0, 0, 0, 0]
i.fill(9, 1);   // fill with 9s starting at idx 1
console.log(i); // [0, 9, 9, 9, 9]
i.fill(8, 2, -1);
console.log(i); // [0, 9, 8, 8, 9]
