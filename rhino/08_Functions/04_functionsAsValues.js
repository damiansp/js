function square(x) { return x * x; }

let s = square;
console.log(square(4)); // 16
console.log(s(4));      // 16

let o = {square: square};
let y = o.square(5);
console.log(y); // 25

let a = [x => x * x, 20];
console.log(a[0](a[1])); // 400


function add(x, y) { return x + y; }
function subtract(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function divide(d, y) { return x / y; }

function operate(operator, operand1, operand2) {
  return operator(operand1, operand2);
}

let i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));
console.log(i);  // (2+3) + (4*5) = 25

const operators = {add: (x, y) => x + y,
                   substract: (x, y) => x - y,
                   multiply: (x, y) => x * y,
                   divide: (x, y) => x / y,
                   pow: Math.pow};

function operate2(operation, op1, op2) {
  if (typeof operators[operation] == 'function') {
    return operators[operation](op1, op2);
  }
  throw 'unknown operator';
}

console.log(operate2('add', 'hello', operate2('add', ' ', 'world'))); // h, w..
console.log(operate2('pow', 10, 2)); // 100




// 1. Defining your own Function Props
uniqueInt.counter = 0;

function uniqueInt() { return uniqueInt.counter++; }
console.log(uniqueInt()); // 0
console.log(uniqueInt()); // 1


function factorial(n) {
  if (Number.isInteger(n) && n > 0) {
    if (!(n in factorial)) { // memoize
      factorial[n] = n * factorial(n - 1);
    }
    return factorial[n];
  }
  return NaN;
}

factorial[1] = 1; // init cache w base case
console.log(factorial(12)); // 479001600
console.log(factorial[10]); // 3628800 (cached in previous)

