function uniqueInteger() { return uniqueInteger.counter++; }
uniqueInteger.counter = 0;


console.log(uniqueInteger()); // 0
console.log(uniqueInteger()); // 1
console.log(uniqueInteger()); // 2

// Compute factorials and cache/memoize
function factorial(n) {
  if (isFinite(n) && n > 0 && n == Math.round(n)) {
    if (!(n in factorial)) factorial[n] = n * factorial(n - 1);
    return factorial[n];
  } else return NaN;
}

factorial[1] = 1; // init base case
console.log(factorial(9)); // 362880
console.log(factorial[8]); // 40320 (cached)
