var now = new Date();
console.log('it is now', now);

var ms = now.getMilliseconds();
var s = now.getSeconds();
var min = now.getMinutes();
var hour = now.getHours();
var date = now.getDate();
var month = now.getMonth();
var year = now.getFullYear();
var dateCopy = new Date(year, month, date, hour, min, s, ms);
console.log('copy is', dateCopy);
console.log('01 Jan 2104:', new Date(2014, 0, 1));
console.log('03 Nov 1976, 1am', new Date(1976, 10, 3, 1));
