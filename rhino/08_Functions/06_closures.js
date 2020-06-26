let scope = 'global';

function checkScope() {
  let scope = 'local';
  function f() { return scope; }
  return f();
}

console.log(checkScope()); // local


function checkAgain() {
  let scope = 'local';
  function f() { return scope; }
  return f;
}

console.log(checkAgain());   // [Function: f]
console.log(checkAgain()()); // local


let uniqueInt = (function() {
    let counter = 0;
    return function() { return counter++; }
}());

console.log(uniqueInt()); // 0
console.log(uniqueInt()); // 1


function counter() {
  let n = 0;
  return {count: function() { return n++; },
          reset: function() { n = 0; }};
}

let c = counter(),
  d = counter();
console.log(c.count()); // 0
console.log(d.count()); // 0
c.reset();
console.log(c.count()); // 0
console.log(d.count()); // 1
