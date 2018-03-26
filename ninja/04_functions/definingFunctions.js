"use strict";

function logArbitraryArgs(...args) {
  for (arg of args) {
    console.log(arg);
  }
}

logArbitraryArgs(2, 3, 4, 3, 0);

function mean(...values) {
  let total = 0;
  for (const val of values) {
    total += val;
  }

  return total / values.length;
}

console.log(mean(1, 2, 3, 5, 7, 11, 13));

