let x = 'x';
let y = 'y';
console.log(x, y);

console.log('My %s is %d years old', 'cat', 2);

console.clear();

x = 1;
y = 2;
console.count(
  '\nThe value of x is ' + x + ' and has been checked... how many times?');
console.count(
  'The value of x is ' + x + ' and has been checked... how many times?');
console.count(
  'The value of y is ' + y + ' and has been checked... how many times?');

const oranges = ['orange', 'orange'];
const apples = ['apple'];
oranges.forEach(fruit => { console.count(fruit); });
apples.forEach(fruit => { console.count(fruit); });


// Print stack trace
const f2 = () => console.trace();
const f1 = () => f2();
f1();


// Calculate run time
const doSomething = () => console.log('test');
const measureDoSomething = () => {
  console.time('doSomething()');
  doSomething();
  console.timeEnd('doSomething()');
};
measureDoSomething();

  

