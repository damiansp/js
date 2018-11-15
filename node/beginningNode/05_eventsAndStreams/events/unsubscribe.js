var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

var fooHandler = function() {
  console.log('handler called');

  // Unsubscribe
  emitter.removeListener('foo', fooHandler);
};

emitter.on('foo', fooHandler);
console.log(emitter.emit('foo')); // handler called; true
console.log(emitter.emit('foo')); // false
