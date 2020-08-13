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
  
