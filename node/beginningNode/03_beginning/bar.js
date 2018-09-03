var foo = require('./foo');
var callItWhatever = require('./foo');
var iNeedThree = true;

foo();
callItWhatever();
if (iNeedThree) {
  var three = require('./foo');
  three();
}
