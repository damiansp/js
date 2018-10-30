var foo = {},
  bar = {};

function func(val) { this.val = val; }

// Force 'this' in func to be 'foo'
func.call(foo, 123);

// Force 'this' in func to be 'bar'
func.call(bar, 456);

console.log(foo.val);
console.log(bar.val);
