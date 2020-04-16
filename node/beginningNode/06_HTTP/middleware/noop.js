const connect = require('connect');
const PORT = 3000;

// use() registers a middleware
let app = connect().use(function(req, res, next) { next(); }).listen(PORT);
console.log('Server running on port ' + PORT);
