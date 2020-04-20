var connect = require('connect');


// Configurable middleware
function greeter(msg) {
  return function(req, res, next) { res.end(msg); };
}


var helloWorldGreeter = greeter('Hello, World!');
var heyGirlGreeter = greeter('Hey, girl...');

connect()
  .use('/hello', helloWorldGreeter)
  .use('/hey', heyGirlGreeter)
  .listen(3000);
