var os = require('os');

var gigabyte = 1 / (Math.pow(1024, 3));

console.log('Total memory:', os.totalmem() * gigabyte, 'GB');
console.log('Available memory:', os.freemem() * gigabyte, 'GB');
console.log('Percent consumed:', 100 * (1 - os.freemem()/os.totalmem()));
