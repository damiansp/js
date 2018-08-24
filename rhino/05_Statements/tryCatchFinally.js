function factorial(x) {
  if (x < 0) { throw new Error('x cannot be negative'); }
  for (var f = 1; x > 1; f *= x, x--) { ; }
  return f;
}


try {
  var n = Number(prompt('Gimme a positive integer:', ''));
  var f = factorial(n);
  console.log(n + '! = ' + f);
} catch (e) {
  console.log(e);
}
