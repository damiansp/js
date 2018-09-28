var foo = {a: 1, b: 'a string', c: true};
var json = JSON.stringify(foo);

console.log(json);
console.log(typeof json); // string

var jsObj = JSON.parse(json);
console.log(jsObj);
console.log(typeof jsObj); // object
