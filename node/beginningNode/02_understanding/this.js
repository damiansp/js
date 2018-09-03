var foo = {
  bar: 123,
  bas: function() { console.log('inside this.bar is:', this.bar); }};

console.log('foo.bar is:', foo.bar);
foo.bas();


function fooFunc() {
  console.log('"this" is called from globals:', this === global);
}

fooFunc();


var fooVar = {bar: 123};

function barFunc() {
  if (this === global) { console.log('called from global'); }
  if (this === fooVar) { console.log('called from fooVar'); }
}

barFunc();
fooVar.bas = barFunc;
fooVar.bas();


function newFoo() {
  this.newFoo = 123;
  console.log('"this" is global:', this == global);
}

// without new
newFoo();
console.log(global.newFoo);

// with
var newestFoo = new newFoo();
console.log(newestFoo.newFoo);
