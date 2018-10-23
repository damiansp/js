var moment = require('moment');

var a = moment([2007, 0, 15]);
var b = moment([2007, 0, 16]);
var c = moment([2007, 1, 15]);
var d = moment([2008, 0, 15]);

console.log(a.from(b));
console.log(a.from(c));
console.log(a.from(d));
console.log(b.from(a));
console.log(c.from(a));
console.log(d.from(a));
