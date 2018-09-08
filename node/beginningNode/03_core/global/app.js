require('./addToGlobal');

console.log(console === global.console); // true
console.log(setTimeout === global.setTimeout); // true
console.log(process === global.process); // true
console.log(something); // 123
