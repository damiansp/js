var util = require('util');

console.log(util.isArray([])); // true
console.log(util.isArray({'js': 'object'})); // false
console.log(util.isDate(new Date()));        // true
console.log(util.isDate({}));                // false
console.log(util.isError(new Error('Error!'))); // true
console.log(util.isError({message: 'Just a message'})); // false
