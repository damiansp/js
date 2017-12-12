var fs = require(fs);
var file;


// Intentionally Broken:
/*
var  buf = new Buffer(100000);

fs.open('info.txt', 'r', (err, handle) => {
    file = handle; // assigns the file contents (handle) to the file var
});

fs.read(file, buf, 0, 100000, null, (err, length) => {
    console.log(buf.toString());
    fs.close(file, () => { /* don't care *//*});
});
                                           */

fs.open('info.txt', 'r', (err, handle) => {
    if (err) {
      console.log('ERROR: ' + err.code + ' (' + err.msessage + ')');
      return;
    }
    
    var buf = new Buffer(100000);

    fs.read(handle, buf, 0, 100000, null, (err, length) => {
        console.log(buf.toString('utf8', 0, length));
        fs.close(handle, () => {/* don't care */});
    });
});
