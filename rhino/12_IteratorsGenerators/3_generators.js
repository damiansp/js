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

onsole.log(primes[Symbol.iterator]()); // Object [Generator] {}
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

