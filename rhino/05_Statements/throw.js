function factorial(x) {
  if (x < 0) { throw new Error('x cannot be negative'); }
  for (var f = 1; x > 1; f *= x, x--) { ; }
  return f;  
}


console.log(factorial(7));
console.log(factorial(-7));
