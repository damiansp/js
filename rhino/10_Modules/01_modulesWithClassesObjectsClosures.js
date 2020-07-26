/*
const BitSet = (function() {
    // Private implementation details
    const BITS = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);
    const MASKS = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128]);
    function isValid(set, n) { ; }                         // ...
    function has(set, byte, bit) { ; }                     // ...

    // Public API
    return class BitSet extends AbstractWritableSet { ; }; // ...
}());
*/


// Define a stats module
const stats = (function() {
    // private util funcs
    const sum = (x, y) => x + y;
    const sq = x => x * x;

    // public
    function mean(data) { return data.reduce(sum) / data.length; }

    function sd(data) {
      let m = mean(data);
      return Math.sqrt(
        data.map(x => x - m).map(sq).reduce(sum) / (data.length - 1));
    }

    return {mean, sd};
}());


let x = [1, 2, 3, 5, 7, 11];
console.log(stats.mean(x)); // 4.83333...
console.log(stats.sd(x));   // 3.71035...



// 1. Automating Closure-Based Modularity
const modules = {};
function require(moduleName) { return modules[moduleName]; }


modules['sets.js'] = (function() {
    const exports = {};

    exports.BitSet = class BitSet { ; } // ...
    return exports;
}());


modules['stats.js'] = (function() {
    const exports = {};
    const sum = (x, y) => x + y;
    const sq = x => x * x;

    exports.mean = function(data) { return data.reduce(sum) / data.length; }

    exports.sd = function(data) {
      let m = mean(data);
      return Math.sqrt(
        data.map(x => x - m).map(sq).reduce(sum) / (data.length - 1));
    }

    return exports;
}());


/*
// In some other file...
const stats = require('stats.js');
const BitSet = require('sets.js').BitSet;

let s = new BitSet(100);
s.insert(10); 
s.insert(20);
s.insert(30);
let average = stats.mean[...s]);
*/
