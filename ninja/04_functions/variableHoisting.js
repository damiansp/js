// Variable declarations using `var` are automatically moved to top of current
// scope

console.log(name); // undefined before assignment, but "name" exists in scope

// var defined
var name = 'Alexa';
console.log(name); // Returns 'Alexa'


helloExpression(); // throws error
helloDeclaration(); // returns 'hello'

var helloExpression = function() {
  console.log('hello');
};

function helloDeclaration() {
  console.log('hello');
}

hellowExpression(); // returns 'hello'
