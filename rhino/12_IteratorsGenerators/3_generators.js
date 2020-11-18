function* oneDigitPrimes() {
  yield 2;
  yield 3;
  yield 5;
  yield 7;
}

let primes = oneDigitPrimes();
console.log(primes.next()); // {value: 2, done: false}
console.log(primes.next().value); // 3
console.log(primes.next().value); // 5
console.log(primes.next());       // {value: 7, done: true}
console.log(primes.next());       // {value: undefined, done: true}

console.log(primes[Symbol.iterator]()); // Object [Generator] {}
console.log([...oneDigitPrimes()]);     // 2 3 5 7
let sum = 0;
for (let prime of oneDigitPrimes()) sum += prime;
console.log(sum); // 17

const seq = function*(from, to) {
  for (let i = from; i <= to; i++) yield i
};
console.log([...seq(3, 5)]); // 3 4 5

let o = {
  x: 1,
  y: 2,
  z: 3,
  *g() {
    for (let key of Object.keys(this)) yield key;
  }
};

console.log([...o.g()]); // x y z g



// 1. Generator Examples
function* fiboSeq() {
  let x = 0,
    y = 1;
  for (;;) {
    yield y;
    [x, y] = [y, x + y];
  }
}

function fibonacci(n) {
  for (let f of fiboSeq()) {
    if (n-- <= 0) return f;
  }
}

console.log(fibonacci(20)); // 10946

// Yield the first n elements of the specified iterable
function* take(n, iterable) {
  let it = iterable[Symbol.iterator]();
  while (n-- > 0) {
    let next = it.next();
    if (next.done) return;
    else yield next.value;
  }
}

console.log([...take(5, fiboSeq())]); // 1 1 2 3 5

function* zip(...iterables) {
  let iterators = iterables.map(i => i[Symbol.iterator]());
  let index = 0;
  while (iterators.length > 0) {
    if (index >= iterators.length) index = 0;
    let item = iterators[index].next();
    if (item.done) iterators.splice(index, 1);
    else {
      yield item.value;
      index++;
    }
  }
}

console.log([...zip(oneDigitPrimes(), 'ab', [0])]); // 2 a 0 3 b 5 7



// 2. `yield*` and Recursive Generators
function* sequence(...iterables) {
  for (let iterable of iterables) {
    for (let item of iterable) yield item;
  }
}

console.log([...sequence('abc', oneDigitPrimes())]); // a b c 2 3 5 7


function* seq2(...iterables) {
  for (let iterable of iterables) yield* iterable
}

console.log([...seq2('abc', oneDigitPrimes())]); // a b c 2 3 5 7


function* errSeq(...iterables) {
  // error (forEach nor a generator; cannot use *yield)
  iterables.forEach(iterable => yield* iterable); 
}
