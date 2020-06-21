// 2. Method Invocation
let calculator = {operand1: 1,
                  operand2: 2,
                  add() { this.result = this.operand1 + this.operand2; }};
calculator.add();
console.log(calculator.result); // 3

let o = {
  m: function() {
    let self = this;
    console.log(this === o); // true 
    f();

    function f() {
      console.log(this === o); // false: "this" is global or unidentified
      console.log(self === o); // true: self is outer "this"
    }
  }
};
o.m();


// 3. Constructor Invocation
o = new Object(); // same as:
o = new Object;
