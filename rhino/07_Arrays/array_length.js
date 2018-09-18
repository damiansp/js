console.log([].length); // 0
console.log(['a', 'n', 'd'].length); // 3

var a = [1, 2, 3, 4, 5];
a.length = 3;
console.log(a); // 1, 2, 3
a.length = 0;
console.log(a); // []
a.length = 5;
console.log(a); // [,,,,]

var b = [1, 2, 3];
Object.defineProperty(b, 'length', {writable: false});
b.length = 0;
console.log(b); // 1, 2, 3
