function square(x) { return x * x; }

var s = square;
console.log(square(4));
console.log(s(4)); 


var o = {square: function(x) { return x * x; }};
var y = o.square(16);
console.log(y);


var a = [function(x) { return x * x; }, 20];
console.log(a[0](a[1]));



function add(x, y) { return x + y; }
function subtract(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function divide(x, y) { return x / y; }
function operate(operator, x, y) { return operator(x, y); }

var operators = {add: function(x, y) { return x + y; },
                 subtract: function(x, y) { return x - y; },
                 mulitply: function(x, y) { return x * y; },
                 divide: function(x, y) { return x / y; },
                 pow: Math.pow};

function operate2(operation, x, y) {
  if (typeof operators[operation] === 'function') {
    return operators[operation](x, y);
  } else throw 'unknown operator';
}

var j = operate2('add', 'hello', operate2('add', ', ', 'World!'));
var k = operate2('pow', 10, 2);
console.log(j, k);
