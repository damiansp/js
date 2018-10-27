String.prototype.red = function(str) {
  var redCode = '\x1b[31m';
  var clearCode = '\x1b[39m';
  return redCode + this + clearCode;
};

console.log('Hello, red red world!'.red());
