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


function counter() {
  var n = 0;
  return {
    count: function() { return n++; },
    reset: function() { n = 0; }
  };
}

var c = counter(), d = counter();
console.log(c.count()); // 0
console.log(d.count()); // 0
console.log(c.count()); // 1
console.log(d.count()); // 1
console.log(c.reset()); // undefined
console.log(c.count()); // 0 
console.log(d.count()); // 2


// Combining closure with property getters/setters
function counter2(n) { // n is the private var
  return {
    get count() { return n++;},
    set count(m) {
      if (m >= n) n = m;
      else throw Error("count can only be set to a larger value");
    }
  };
}
  
var c = counter2(100);
console.log(c.count); // 100
console.log(c.count); // 101
c.count = 200;
console.log(c.count); // 200
//c.count = 200; // Error


function addPrivateProperty(o, name, predicate) {
  var value;

  o['get' + name] = function() { return value; };
  o['set' + name] = function(v) {
    if (predicate && !predicate(v)) {
      throw Error('set' + name + ': invalid value ' + v);
    } else value = v;
  };
}

var o = {};

addPrivateProperty(o, 'Name', function(x) { return typeof x == 'string'; });
o.setName('Fank');
console.log(o.getName()); // Frank
//o.setName(0); // Error - wrong type


function costfunc(v) { return function() { return v; };}
var funcs = [];
for (var i = 0; i < 10; i++) funcs[i] = costfunc(i);
console.log(funcs[5]()); // 5
