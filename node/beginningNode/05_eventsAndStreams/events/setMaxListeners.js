var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();
emitter.setMaxListeners(30);

var listenersCalled = 0;

function someCallback() {
  emitter.on('foo', function() { listenersCalled++; });
}

for (var i = 0; i < 20; i++) { someCallback(); }

emitter.emit('foo');
console.log('listeners called:', listenersCalled);
