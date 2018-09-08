var path = require('path');

var completePath = '/foo/bar/fubar.html';

console.log(path.dirname(completePath));  // /foo/bar
console.log(path.basename(completePath)); // fubar.html
console.log(path.extname(completePath));  // .html

