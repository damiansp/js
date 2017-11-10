function* add(x) {
  yield x + 1;
  var y = yield(null);
  y = 6;
  return x + y;
}

var gen = add(5);

gen.next(); // 6
gen.next(); // null
gen.next(); // 11
gen.next(); // undefined
