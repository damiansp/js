var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('foo', function(e) {
    console.log('subscriber 1:', e);
    e.handled = true;
});

emitter.on('foo', function(e) {
    if (e.handled) { console.log('event already handled'); }
});

emitter.emit('foo', {a: 1});
emitter.emit('foo', {handled: false})
  
