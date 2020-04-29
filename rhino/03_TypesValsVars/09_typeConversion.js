// 2 Explicit conversion
console.log(Number('3')); // 3
console.log(String(false)); // "false"
console.log(Boolean([]));   // true

console.log(3 + ''); // "3"
console.log(+'3');   // 3
console.log('3' - 0); // 3
console.log(!!'3');   // true

let n = 17;

bin_str = n.toString(2);  // 10001
oct_str = n.toString(8);  // 021
hex_str = n.toString(16); // 0x11

n = 123.456789;
n.toFixed(0); // 123
n.toFixed(1); // 123.5
n.toFixed(2); // 123.46
n.toExponential(1); // 1.2e+2
n.toExponential(2); // 1.23e+2
n.toPrecision(5);   // 123.46

parseInt('3 blind mice'); // 3
parseInt('-3.14');        // -3
parseInt('11', 2);        // 3 (binary of 3 is 11)
parseInt('ff', 16);       // 255

console.log(({x: 1, y: 2}).toString()); // [object Object]
