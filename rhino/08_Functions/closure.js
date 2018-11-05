var scope = 'global scope';

function checkScope() {
  var scope = 'local scope';
  function f() { return scope; }
  return f();
}


function checkAgain() {
  var scope = 'local again';
  function f() { return scope; }
  return f;
}

console.log(checkScope()); // local scope
console.log(checkAgain()()); // local again


var uniqueInt = (function() {
    var counter = 0;
    return function() { return counter++; };
}());

console.log(uniqueInt()); // 0
console.log(uniqueInt()); // 1
