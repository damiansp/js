let strname = 'string name';
let symname = Symbol('propname');

console.log(typeof strname); // string
console.log(typeof symname); // symbol

let o = {};
o[strname] = 1;
o[symname] = 2;
console.log(o[strname]); // 1
console.log(o[symname]); // 2

let s = Symbol('propname');
console.log(s === symname);      // false
console.log(symname.toString()); // Symbol(propname)
console.log(s.toString());       // Symbol(propname)
console.log(Symbol.keyFor(symname)); // undefined
console.log(Symbol.keyFor(s));       // undefined
