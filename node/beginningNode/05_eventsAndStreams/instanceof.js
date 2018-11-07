var inherits = require('util').inherits;


function A() {}
function B() {}
inherits(B, A);
function C() {}

var b = new B();

console.log(b instanceof B); // true
console.log(b instanceof A); // true
console.log(b instanceof C); // false
