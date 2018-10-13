var argv = require('optimist').argv;
console.log(argv);

delete argv['$0'];
console.log(argv);
