var fs = require('fs');

fs.unlink('./test.txt', function(err) {
    if (err) console.log('Error:', err);
    else console.log('text.txt successfully deleted');
});
