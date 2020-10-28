let sum = 0;
for (let i of [1, 2, 3]) sum += i;
console.log(sum); // 6

let chars = [...'abcd']; // [a, b, c, d]
let data = [1, 2, 3, 4, 5];
console.log(Math.max(data)); // NaN
console.log(Math.max(...data)); // 5

let purpleHaze = Uint8Array.of(255, 0, 255, 128);
let [r, g, b, a] = purpleHaze;
console.log(a); // 128

let m = new Map([['one', 1], ['two', 2]]);
for (let [k, v] of m) console.log(`${k} => ${v}`);
