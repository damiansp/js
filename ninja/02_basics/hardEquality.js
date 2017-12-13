var answer = 5;

console.log(answer === 5);   // true
console.log(answer == '5');  // true
console.log(answer === '5'); // false

console.log(NaN === NaN);       // false!
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(5));   // false
console.log(isNaN('hello'));    // true
console.log(Number('5') === 5); // true


