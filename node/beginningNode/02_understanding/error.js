try {
  console.log('about to throw an error');
  throw new Error('Error thrown');
} catch (e) {
  console.log('I only execute if error is thrown in try');
  console.log('Error caught: ', e.message);
} finally {
  console.log('I execute no matter what');
}


/** Doesn't work:
try {
  setTimeout(function() {
      console.log('\nabout to throw another error...');
      throw new Error('Nudder error thrown');
  }, 1000);
} catch (e) {
  console.log('I\'m unreachable');
}

console.log('...out of the try block');
*/

setTimeout(function() {
    try {
      console.log('throwing all the errors...');
      throw new Error('all the errors');
    } catch (e) {
      console.log(e.message);
      console.log('Gotta catch \'em all!');
    }
}, 1000);


function getConnection(callback) {
  var connection;
  try {
    // assume connection failed
    throw new Error('connection failed');

    // notify callback conn succeeded?
    callback(null, connection);
  } catch (error) {
    // notify callback about error?
    callback(error, null);
  }
}

// Usage
getConnection(function(error, connection) {
    if (error) { console.log('Error:', error.message); }
    else { console.log('Connection succeeded:', connection); }
});


  
