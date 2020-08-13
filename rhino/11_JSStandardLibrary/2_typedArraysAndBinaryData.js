// 2. Creating Typed Arrays
let bytes = new Uint8Array(1024); // 1024 bytes
let matrix = new Float64Array(9); // for a 3x3 matrix
let point3D = new Int16Array(3);  // point(x, y, z)
let rgba = new Uint8ClampedArray(4);

const WHITE = Uint8ClampedArray.of(255, 255, 255, 0);
let ints = Uint32Array.from(WHITE);
let trunc = Uint8Array.of(1.23, 4.56, 78.90);
console.log(trunc); // [1, 4, 78]

let buffer = new ArrayBuffer(1024 * 1024);
console.log(buffer.byteLength); // 1024 * 1024 = 1,048,576 (1MB)
  
let asBytes = new Uint8Array(buffer); // view as bytes
let asInts = new Int32Array(buffer);  // view as 32-bit signed ints
let lastK = new Uint8Array(buffer, 1023 * 1024); // last kB as bytes
let ints2 = new Int32Array(buffer, 1024, 256);   // 2nd kB as 256-ints



// 3. Using Typed Arrays
/** Return the largest prime smaller than n */
function sieve(n) {
  let a = new Uint8Array(n + 1);
  let max = Math.floor(Math.sqrt(n)); // no factors higher than this
  let p = 2;                          // first prime
  while (p <= max) {
    for (let i = 2 * p; i <= n; i += p) a[i] = 1;
    while (a[++p]) /* nothing */;
  }
  while (a[n]) n--;
  return n;
}

console.log(sieve(9876543)); // 9876527

let ints3 = new Int16Array(10);
console.log(ints.fill(3).map(x => x * x).join('')); // 9999



// 4. Typed Array Methods and Properties
