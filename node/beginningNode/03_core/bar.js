let foo = require('./foo');
let callItWhatever = require('./foo');
let iNeedThree = true;

foo();
callItWhatever();
if (iNeedThree) {
  let three = require('./foo');
  three();
}
