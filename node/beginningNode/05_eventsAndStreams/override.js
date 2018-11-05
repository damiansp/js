var inherits = require('util').inherits;

function Base() { this.message = 'base message'; }
Base.prototype.foo = function() { return this.message + " base foo"; };

function Child() { Base.call(this); }
inherits(Child, Base);

// Override parent behavior
Child.prototype.foo = function() {
  return Base.prototype.foo.call(this) + " child foo";
};

var base = new Base();
var child = new Child();

console.log(base.foo());  // base message base foo
console.log(child.foo()); // base message base foo child foo
