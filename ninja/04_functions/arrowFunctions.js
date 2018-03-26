'use strict';

const square = x => x * x;
const add = (x, y) => x + y;
const hello = () => console.log('hello, world!');

const tax = (salary) => {
  const taxable = salary - 8000;
  const lowerRate = 0.25 * taxable;
  taxable = taxable - 20000;
  const higherRate = 0.4 * taxable;
  return lowerRate + higherRate;
};
