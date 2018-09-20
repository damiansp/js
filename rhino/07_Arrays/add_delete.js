var a = [];
a[0] = 'zero';
a[1] = 'one';
a.push('two');
a.push('three', 'four');
console.log(a);

// Insert at front
a.unshift('negative');
console.log(a);

delete a[1];
console.log(1 in a); // false
console.log(a.length); // 6
console.log(a);        // ['negative', , 'one', 'two', 'three', 'four']

console.log(a.pop());  // four
console.log(a);        // ['negative', , 'one', 'two', 'three']
console.log(a.shift()); // negative
console.log(a);         //[, 'one', 'two', 'three']


