/* run as
   node 01_commandLineArgs key=value k=v2*/
process.argv.forEach((key, val) => { console.log(`${key}: ${val}`); });

const args = process.argv.slice(2);
console.log(args);

/* requries formatting as
   node 01_commandLineArgs --name=joe */
const args2 = require('minimist')(process.argv.slice(2));
console.log(args2);
console.log(args2['key']);
