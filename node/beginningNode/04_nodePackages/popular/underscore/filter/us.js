var _ = require('underscore');

var foo = [1, 10, 50, 200, 900, 90, 300, 40];
var results = _.filter(foo, function(x) { return x > 100; });

console.log(results);
