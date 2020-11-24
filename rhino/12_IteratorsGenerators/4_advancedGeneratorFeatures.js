// 1. Return value of a generator function
function *oneAndDone() {
  yield 1;
  return 'done';
}

console.log([...oneAndDone()]); // 1 ('done' not returned!)

let generator = oneAndDone();
console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 'done', done: true}
console.log(generator.next()); // {value: undefined, done: true}



// 2. Value of a yield expression
function* smallNumbers() {
  console.log('next() invoked the first time; arg discarded');
  let y1 = yield 1;
  console.log('next() invoked the second time with arg', y1); //
  let y2 = yield 2;
  console.log('next() invoked the third time with arg', y2); //
  let y3 = yield ;
  console.log('next() invoked the fourth time with arg', y3); //
  return 4;
}

let g = smallNumbers();
console.log('generator created; no code run yet');
let n1 = g.next('a');
console.log('generator yielded', n1.value);
let n2 = g.next('b');
console.log('generator yielded', n2.value);
let n3 = g.next('c');
console.log('generator yielded', n3.value);
let n4 = g.next('d');
console.log('generator yielded', n4.value);

