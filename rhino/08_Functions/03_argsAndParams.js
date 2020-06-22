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


