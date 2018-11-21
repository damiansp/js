var f = new Function('x', 'y', 'return x*y;');
console.log(f(9, 8)); // 72


var scope = 'global';

function constructFunction() {
  var scope = 'local';
  return new Function('return scope;');
}

// Function() constructor DOES NOT use local scope, so:
console.log(constructFunction()()); // ReferenceError: scope is not defined
