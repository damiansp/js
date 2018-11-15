function check(args) {
  var actual = args.length;
  var expected = args.callee.length;
  if (actual !== expected) {
    throw Error('Expected ' + expected + 'args. Got ' + actual + '.');
  }
}


function f(x, y, z) {
  check(arguments);
  return x + y + z;
}


console.log(f(1, 2, 3));
