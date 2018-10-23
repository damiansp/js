var moment = require('moment');

var date = new Date(2010, 1, 14, 15, 25, 50);
var wrapped = moment(date);

console.log(wrapped.format('"dddd, MMMM Do YYYY, h:mm:ss a"'));
console.log(wrapped.format("ddd, hA"));
