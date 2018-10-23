var foo = {};
var bar = {'foo': foo};

console.log(JSON.stringify(bar));

// Custom serialization
foo.toJSON = function() { return "custom"; };
console.log(JSON.stringify(bar));
