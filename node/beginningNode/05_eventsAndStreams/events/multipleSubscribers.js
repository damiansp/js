var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('foo', function() { console.log('subscriber 1'); });
emitter.on('foo', function() { console.log('subscriber 2'); });

emitter.emit('foo');
emitter.emit('foo');
