var foo = require('./foo');
console.log('something:', foo.something);

foo.something = 321;

var bas = require('./bar');
