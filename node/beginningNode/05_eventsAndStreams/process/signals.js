setTimeout(
  function() {
    console.log('5s passed; exiting.');
  },
5000);

console.log('Started. Will exit in 5s.');
process.on('SIGINT', function() { console.log('Got SIGINT. Ignoring.'); });
