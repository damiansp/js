var events = require('events');
var eventEmitter = events.EventEmitter;
var receivedEmitter = new eventEmitter();
var processedEmitter = new eventEmitter();

receivedEmitter.on('data_received', function() {
    console.log('data received successfully.');
});

// .emit - triggered every time
receivedEmitter.emit('data_received'); // triggers event
receivedEmitter.emit('data_received'); // triggers event


// .once - triggered first time only
processedEmitter.once('data_processed', function() {
    console.log('data processed.');
});

processedEmitter.emit('data_processed'); // triggers event
processedEmitter.emit('data_processed'); // DOES NOT trigger event


console.log(
  'Times data received: ' +
  (eventEmitter.listenerCount(receivedEmitter, 'data_received') + 1));
console.log(
  'Times data processed: ' +
  (eventEmitter.listenerCount(processedEmitter, 'data_processed') + 1));

  



