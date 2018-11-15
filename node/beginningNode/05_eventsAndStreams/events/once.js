var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.once('foo', function() { console.log('foo raised'); });

console.log(emitter.emit('foo')); // 'foo raised'; true
console.log(emitter.emit('foo')); // false
