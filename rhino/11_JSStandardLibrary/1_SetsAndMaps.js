// 1. The Set Class
let s = new Set();
let t = new Set([1, s]);
let u = new Set(s);
let unique = new Set('Mississippi');
console.log(unique.size); // 4 (M i s p)

console.log(s.size); // 0
s.add(1);
console.log(s.size); // 1
s.add(1);
console.log(s.size); // 1
s.add(true);
console.log(s.size); // 2
s.add([1, 2, 3]);
console.log(s.size); // 3
s.delete(1);
console.log(s.size); // 2
console.log(s.delete('test')); // false
console.log(s.delete(true));   // true
s.delete([1, 2, 3]);
console.log(s.size); //1
s.clear();
console.log(s.size); // 0

let primes = new Set([2, 3, 5, 7]);
console.log(primes.has(2)); // true
console.log(primes.has(4)); // false
console.log(primes.has('5')); // false

let sum = 0;
for (let p of primes) sum += p;
console.log(sum); // 17
console.log([...primes]);
console.log(Math.max(...primes)); // 7

let product = 1;
primes.forEach(n => { product *= n; });
console.log(product); // 210



// 2. The Map Class
let m = new Map();
let n = new Map([['one', 1], ['two', 2]]);
let copy = new Map(n);
let o = {x: 1, y: 2};
let p = new Map(Object.entries(o));
console.log(p);

console.log(m.size); // 0
m.set('one', 1);
m.set('two', 2);
console.log(m.size); // 2
console.log(m.get('two')); // 2
console.log(m.get('three')); // undefined
m.set('one', true);
console.log(m.size);         // 2
console.log(m.has('one'));   // true
m.has(true);                 // false
m.delete('one');
console.log(m.size);         // 1
console.log(m.delete('three')); // false
m.clear();

let q = new Map().set('one', 1).set('two', 2).set('three', 3);
let r = new Map();
r.set({}, 1);
r.set({}, 2);
console.log(r.size); // 2 (two diff empty objects)
console.log(r.get({})); // undefined
r.set(r, undefined);
console.log(r.has(r));  // true
console.log(r.get(r));  // undefined

console.log([...n]); // [['one', 1], ['two', 2]]
for (let [key, val] of n)  console.log(key + ' -> ' + val);
console.log([...n.keys()]);
console.log([...n.values()]);
console.log([...n.entries()]);

             

