console.log(5..toExponential());
console.log(5 .toExponential());
console.log(5.0.toExponential());
console.log((5).toExponential());

const PI = 3.1415926;
console.log(PI.toFixed(4));     // toFixed() returns a String
console.log(PI.toPrecision(3)); //           ""      "" ""

console.log(1/0);

var notANumber = 'hi' * 5;
console.log(notANumber);        // NaN
console.log(typeof notANumber); // 'number'
