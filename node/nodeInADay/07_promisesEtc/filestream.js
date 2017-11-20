var fs = require('fs');
var readStream = fs.createReadStream('./data.txt');
var writeStream = fs.createWriteStream('./data2.txt');

readStream.on('data', function(data) {
    var chunk = data.toString();
    console.log(chunk);
    writeStream.write(chunk + '...\n')
});
