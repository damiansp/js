const connect = require('connect');

let echo = {handle: function(req, res, next) { req.pipe(res); }};

connect().use(echo).listen(3000);
