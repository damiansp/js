// 1
console.log(eval('3 + 2'));

// 2 Global eval()
var geval = eval;
var x = y = 'global';

function f() {
  var x = 'local';
  eval('x += "-changed";');
  return x;
}

function g() {
  var y = 'local';
  geval('y += "-changed";');
  return y;
}

console.log(f(), x); // local-changed global
console.log(g(), y); // local global-changed
