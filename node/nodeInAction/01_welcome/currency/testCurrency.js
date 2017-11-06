const currency = require('./currency');

console.log('$50 CAN = $' + currency.canadianToUS(50) + ' US');
console.log('$50 US = $' + currency.USToCanadian(50) + ' CAN');
