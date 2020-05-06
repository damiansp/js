function square(x, log) { // second arg optional
  if (log) {
    log(x);
  }
  return x * x;
}

// Eq:
function square(x, log) {
  log?.(x);
  return x * x;
}


let f = null,
  x = 0;

try {
  f(x++); // throws error
} catch(e) {
  x;      // x = 1! b/c incremented before err
}

f?.(x++); // x not incremented, due to short-circuiting

