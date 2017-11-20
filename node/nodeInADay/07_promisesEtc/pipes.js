var fs = require('fs');
var readStream = fs.createReadStream('./data.txt');
var writeStream = fs.createWriteStream('./data2.txt');

readStream.pipe(writeStream);

