var calculator = {
  operand1: 1,
  operand2: 1,
  add: function() { this.result = this.operand1 + this.operand2; }};

calculator.add();
console.log(calculator.result);


var o = {
  m: function() {
    var self = this;
    console.log(this === o); // true
    f();

    function f() {
      console.log(this === o); // false
      console.log(self === o); // true
    }
  }
};

console.log(o.m());
