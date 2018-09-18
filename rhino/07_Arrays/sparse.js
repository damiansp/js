var a = new Array(5);
console.log(a.length); // 5
console.log(a);        // [ , , , , ]
a[1000] = 0;
console.log(a.length); // 1001
console.log(a[999]);   // undefined

var a1 = [,]; // no elements, length 1
var a2 = [undefined]; // one undefined elem
console.log(0 in a1); // false: no element with index 0
console.log(0 in a2); // true idx 0 is undefined
