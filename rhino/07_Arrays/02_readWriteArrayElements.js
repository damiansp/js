let a = ['world'];
let value = a[0]; // world
a[1] = 3.14;
let i = 2;
a[i] = 3;
a[i + 1] = "hello";
a[a[i]] = a[0];
console.log(a); // ['world', 3.14, 3, 'world']
console.log(a.length);

let o = {};
o[1] = 'one';
console.log(o['1']); // 'one'

a[-1.23] = true; // '-1.23' is a new prop of a
a["10"] = 0;     // same as a[10]
a[1.000] = 1;    // same as a[1]
console.log(a);  // ['world', 1, 3, 'world', <6 empty items>, 0, '-1.23': true]
console.log(a.length); // 11

