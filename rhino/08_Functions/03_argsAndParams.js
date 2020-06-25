// 1. Optional Parameters and Defaults

// Appnd names of enumerable props of obj o to array a and return a.
function getPropertyNames(o, a) {
  a = a || [];
  for (let prop in o) a.push(prop);
  return a;
}

let o = {x:1},
  p = {y:2, z: 3};
let a = getPropertyNames(o);
a = getPropertyNames(p, a);
console.log(a); // x y z


function getPropNames(o, a=[]) {
  for (let prop in o) a.push(prop);
  return a;
}

a = getPropNames(o);
a = getPropNames(p, a);
console.log(a); // x y z

const rectangle = (w, h=2*w) => ({w, h});
console.log(rectangle(1, 3)); // {w: 1, h: 3}
console.log(rectangle(1));    // {w: 1, h: 2}


// 2. Rest Params and Var-length Args
function max(first=-Infinity, ...rest) {
  let maxValue = first;
  for (let n of rest) {
    if (n > maxValue) maxValue = n;
  }
  return maxValue;
}

console.log(max(1, 10, 100, 1000, 2, 30, 40)); // 1000


// 3. The Arguments Object
function min(x) {
  let minValue = Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < minValue) minValue = arguments[i];
  }
  return minValue;
}

console.log(min(1, 10, 100, 1000, 2, 30, 40)); // 1


// 4. Spread Operator
let numbers = [5, 2, 10, -1, 9, 100, 4];
console.log(Math.min(...numbers));


function timed(f) {
  return function(...args) {
    console.log(`Entering function ${f.name}`);
    let startTime = Date.now();
    try { return f(...args); }
    finally {
      console.log(`Exiting ${f.name} after ${Date.now() - startTime} ms`);
    }
  };
}


function benchmark(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum +=i;
  return sum;
}

timed(benchmark)(1000000);


// 5. Destructuring Function Args into Params
function vectorAdd(v1, v2) {
  return [v1[0] + v2[0], v1[1] + v2[1]]
}

console.log(vectorAdd([1, 2], [3, 4])); // [4, 6]


function vectorAdd2([x1, y1], [x2, y2]) {
  return [x1 + x2, y1 + y2]
}

console.log(vectorAdd2([1, 2], [3, 4])); // [4, 6]


function vectorMultiply({x, y}, scalar) {
  return {x: x * scalar, y: y * scalar};
}

console.log(vectorMultiply({x: 2, y: 3}, 4)); // {x: 8, y: 12}


function vectorAdd({x: x1, y: y1}, {x: x2, y: y2}) {
  return {x: x1 + x2, y: y1 + y2};
}

console.log(vectorAdd({x: 1, y: 2}, {x: 3, y: 4})); // {x: 4, y: 6}


function vecMult({x, y, z=0}, scalar) {
  return {x: x * scalar, y: y * scalar, z: z * scalar};
}

console.log(vecMult({x: 2, y: 3}, 4)); // {x: 8, y: 12, z: 0}


function arrayCopy({from, to=from, n=from.length, fromIndex=0, toIndex=0}) {
  let valuesToCopy = from.slice(fromIndex, fromIndex + n);
  to.splice(toIndex, 0, ...valuesToCopy);
  return to;
}

let b = [1, 2, 3, 4, 5],
  c = [9, 8, 7, 6, 5];
console.log(arrayCopy({from: b, n: 3, to: c, toIndex: 4})); // 9 8 7 6 1 2 3 5


function f([x, y, ...coords], ...rest) {
  return [x + y, ...rest, ...coords];
}

console.log(f([1, 2, 3, 4], 5, 6)); // 3 5 6 3 4


function vMult({x, y, z=0, ...props}, scalar) {
  return {x: x * scalar, y: y * scalar, z: z * scalar, ...props};
}

console.log(vMult({x: 1, y: 2, w: -1}, 3)); // {x: 3, y: 6, z: 0, w: -1}



// 6. Arg Types
function sum(a) {
  let total = 0;
  for (let element of a) {
    if (typeof element !== 'number') {
      throw new TypeError('sum(): elements must be numbers');
    }
    total += element;
  }
  return total;
}

console.log(sum([1, 2, 3])); // 6
//console.log(sum(1, 2, 3));   // TypeErr not iterable
//console.log(sum([1, 2, '3'])); // TypeErr not a number
