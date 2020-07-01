// 5. bind()
function f(y) { return this.x + y; } // needs to be bound
let o = {x: 1};
let g = f.bind(o);                   // calling g(x) invokes f on o
console.log(g(2));                   // 3
let p = {x: 10, g};                  // invoke g() as method of p
console.log(p.g(2));                 // 3; g still bound to o, not p


// 7. Function() Constructor
const h = new Function('x', 'y', 'return x * y;');

let scope = 'global';
function constructFunction() {
  let scope = 'local';
  // does not capture local scope; always compiled as top-level funcs
  return new Function('scope', 'return scope;') 
};                                    

console.log(constructFunction()());      // undefined
console.log(constructFunction()(scope)); // global
