function outer(arg) {
  var outerVar = arg;

  function inner() {
    console.log(outerVar);
  }

  inner();
}


function outer2(arg) {
  var outerVar = arg;
  return function() {
    console.log(outerVar)
  }
}


console.log(outer('hello, closure!'));

var inner = outer2('hello, closure!');
console.log(inner());
