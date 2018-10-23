function hypoteneuse(a, b) {
  function square(x) { return x*x; }
  return Math.sqrt(square(a) + square(b));
}

console.log(hypoteneuse(3, 4));
