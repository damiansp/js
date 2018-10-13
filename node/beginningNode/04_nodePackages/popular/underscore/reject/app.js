var _ = require('underscore');

var nums = [1, 2, 3, 4, 5, 6, 7, 14, 141, 87];
var odds = _.reject(nums, function(x) { return x % 2 == 0; });
console.log(odds);
console.log(_.min(nums));
console.log(_.max(nums));


