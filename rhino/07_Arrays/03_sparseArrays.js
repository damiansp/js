let a = new Array(5); // len = 5
a = [];               // len = 0
a[1000] = 0;          // len = 1001

let a1 = [, ];        // len = 1
let a2 = [undefined]; // len = 1
console.log(0 in a1); // false (no 0 index)
console.log(0 in a2); // true 0 = undefined

