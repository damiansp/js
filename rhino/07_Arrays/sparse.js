var a = new Array(5);
console.log(a.length); // 5
console.log(a);        // [ , , , , ]
a[1000] = 0;
console.log(a.length); // 1001
console.log(a[999]);   // undefined

