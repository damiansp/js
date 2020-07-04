// 1. Processing Arrays with Functions
let data = [1, 1, 3, 5, 5];
let total = 0;

for (let i = 0; i < data.length; i++) total += data[i];
let mean = total / data.length;
console.log(mean); // 3

total = 0;
for (let i = 0; i < data.length; i++) {
  let dev = data[i] - mean;
  total += dev * dev;
}
let sd = Math.sqrt(total / (data.length - 1));
console.log(sd); // 2

// Functional equivalent
const sum = (x, y) => x + y;
const sq = x => x * x;
mean = data.reduce(sum) / data.length;
console.log(mean); // 3
devs = data.map(x => x - mean);
sd = Math.sqrt(devs.map(sq).reduce(sum) / (data.length - 1));
console.log(sd);   // 2



// 2. Higher-Order Functions
function not(f) {
  return function(...args) {
    let result = f.apply(this, args);
    return !result;
  };
}

const even = x => x % 2 === 0;
const odd = not(even);
console.log(data.some(even)); // false
console.log(data.every(odd)); // true

function mapper(f) { return a => a.map(f); } // shorthand for: a.map(x => f(x)) 

const incr = x => ++x;
const incrAll = mapper(incr);
console.log(incrAll([1, 10, 100])); // 2 11 101
                                        
function compose(f, g) {
  return function(...args) {
    return f.call(this, g.apply(this, args));
  }
}

console.log(compose(sq, sum)(2, 3)); // = (2+3)^2 = 25



// 3. Partial Application of Functions
function partialLeft(f, ...outerArgs) {
  return function(...innerArgs) {
    let args = [...outerArgs, ...innerArgs];
    return f.apply(this, args);
  };
}

function partialRight(f, ...outerArgs) {
  return function(...innerArgs) {
    let args = [...innerArgs, ...outerArgs];
    return f.apply(this, args);
  };
}

function partial(f, ...outerArgs) {
  return function(...innerArgs) {
    let args = [...outerArgs];
    let innerIdx = 0;
    for (let i = 0; i < args.length; i++) {
      if (args[i] === undefined) args[i] = innerArgs[innerIdx++];
    }
    args.push(...innerArgs.slice(innerIdx));
    return f.apply(this, args);
  };
}

const f = function(x, y, z) { return x * (y - z); };
console.log(partialLeft(f, 2)(3, 4));        // 2 * (3 - 4) = -2
console.log(partialRight(f, 2)(3, 4));       // 3 * (4 - 2) =  6
console.log(partial(f, undefined, 2)(3, 4)); // 3 * (2 - 4) = -6

const decr = partialLeft(sum, -1);
const cuberoot = partialRight(Math.pos, 1/3);
console.log(cuberoot(decr(28))); // 3
