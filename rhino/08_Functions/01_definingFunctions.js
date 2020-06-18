// 1. Function Declarations
function printprops(o) {
  for (let p in o) { console.log(`${p}: ${o[p]}\n`); }
}


function distance(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx*dx + dy*dy);
}


function factorial(x) {
  if (x <= 1) { return 1; }
  return x * factorial(x - 1);
}



// 2. Function Expressions
const square = function(x) { return x * x; };
const f = function fact(x) {
  if (x <= 1) { return 1; }
  return x * fact(x - 1);
};

console.log([3, 2, 1].sort(function(a, b) { return a - b; })); // 1 2 3
let tensq = (function(x) {return x * x;}(10));



// 3. Arrow Functions
const sum = (x, y) => { return x + y; };
const add = (x, y) => x + y;
const polynomial = x => x*x + 2*x + 3;
const meaning = () => 42;

const e = x => { return {value: x}; }; // o: e() returns an obj
const g = x => ({value: x});           // o: g() returns an obj
// const h = x => {value: x};          // x: h() returns nothing
// const i = x => {v: x, w: x};        // x: syntax err

let filtered = [1, null, 3, 4].filter(x => x !== null);
console.log(filtered); // [ 1, 3, 4]
let squares = [1, 2, 3, 4].map(x => x*x);
console.log(squares);  // [1, 4, 9, 16]



// 4. Nested Functions
function hypot(a, b) {
  function sq(x) { return x * x; }
  return Math.sqrt(sq(a) + sq(b));
}

console.log(hypot(3, 4)); // 5
