// 1. Node Exports
const sum = (x, y) => x + y;
const square = x => x * x;

exports.mean = data => data.reduce(sum) / data.length;
exports.sd = function(d) {
  let m = exports.mean(d);
  return Math.sqrt(d.map(x => x - m).map(square).reduce(sum) / (d.length - 1));
};

/*
module.exports = class BitSet extends AbstractWritableSet { ... };
*/

const sum2 = (x, y) => x + y;
const square2 = x => x * x;

exports.mean2 = data => data.reduce(sum) / data.length;
exports.sd2 = d => {
  let m = exports.mean(d);
  return Math.sqrt(d.map(x => x - m).map(square).reduce(sum) / (d.length - 1));
};

module.exports = { mean2, sd2 };



// 2. Node Imports
const fs = require('fs');
const http = require('http');
/*
// import own code
const stats = require('./stats.js')
const BitSet = require('./utils/bitset.js')
 */
