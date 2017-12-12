let fs = require('fs');

function FileObject() {
  this.filename = '';

  // Don't use => for member functions
  this.fileExists = function(callback) {
    console.log('Attempting to open:' + this.filename);

    fs.open(this.filename, 'r', function(err, handle) {
        if (err) {
          console.log('Unable to open:' + this.filename);
          callback(err);
          return;
        }

        fs.close(handle, () => {});
        callback(null, true);
    });
  }
}


let fo = new FileObject();
fo.filename = 'noSuchFile';

fo.fileExists((err, results) => {
    if (err) {
      console.log('\nError opening file:' + JSON.stringify(err));
      return;
    }

    console.log('File found!!');
});
