var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

// Process terminates b/c ther is no listener for error event
emitter.emit('error', new Error('Something harrible'));
console.log('unreachable');
