const connect = require('connect');
const PORT = 3000;

let app = connect().listen(PORT);
console.log('Server running on port ' +  PORT);
