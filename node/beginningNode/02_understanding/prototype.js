var foo = {};
foo.__proto__.bar = 123; // bad form but works
console.log(foo.bar);

function fu() {};
fu.prototype.bar = 234;
var bas = new fu();
console.log(bas.__proto__ === fu.prototype); // true
console.log(bas.bar);                        // 234

function fubar() {};
fubar.prototype.bar = 345;

var theBas = new fubar();
var theQux = new fubar();
console.log(theBas.bar); // 345
console.log(theQux.bar); // 345
fubar.prototype.bar = 456;
console.log(theBas.bar); // 456
console.log(theQux.bar); // 456

function oof() {};
oof.prototype.rab = 567;
var sab = new oof();
var xuq = new oof();
sab.rab = 678;
console.log(sab.rab); // 678 <- this object only; prototype not accessed:
console.log(xuq.rab); // 567
