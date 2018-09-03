var foo = require('./foo');
var obj = foo();
var thing1 = foo();

console.log(obj.something);
console.log(thing1.something);
obj.something = 999;
console.log(obj.something);
console.log(thing1.something);
