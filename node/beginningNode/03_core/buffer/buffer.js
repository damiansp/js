var str = "Hi there, Buffer world!";
var buffer = new Buffer(str, 'utf-8');
var strAgain = buffer.toString('utf-8');
console.log(strAgain);
