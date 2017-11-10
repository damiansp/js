// npm install q
var Q = require('q');

function add() {
  var a = 5,
    b = 6,
    c = a + b;
  console.log(c);
}

var displayPromise = Q.denodeify(add);
var promise = add;

promise.then { console.log('add() completed'); }

