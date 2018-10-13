var _ = require('underscore');

var foo = [1, 2, 3, 4];
var results = _.map(foo, function(x) { return 2*x; });
console.log(results);
