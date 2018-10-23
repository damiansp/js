function getRed(str) {
  var redCode = '\x1b[31m';
  var clearCode = '\x1b[39m';
  return redCode + str + clearCode;
}

console.log(getRed('I\'d rather be dead than red on the head'));
