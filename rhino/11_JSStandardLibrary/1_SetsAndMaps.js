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

