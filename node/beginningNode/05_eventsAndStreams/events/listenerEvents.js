var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

// Listener addition/removal notifications
emitter.on('newListener', function(eventName, listenerFunction) {
    console.log(eventName, listenerFunction.name, 'added');
});
emitter.on('removeListener', function(eventName, listenerFunction) {
    console.log(eventName, listenerFunction.name, 'removed');
});


function a() { console.log('hey from a'); }
function b() { console.log('hey from b'); }

// Add
emitter.on('foo', a); // foo a added
emitter.emit('foo');  // hey from a
emitter.on('foo', b); // foo b added
emitter.emit('foo');  // hey from a; hey from b


// Remove
emitter.removeListener('foo', a); // foo a removed
emitter.emit('foo');              // hey from b
emitter.removeListener('foo', b); // foo b removed
emitter.emit('foo');              // 
