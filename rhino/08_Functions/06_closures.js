let scope = 'global';

function checkScope() {
  let scope = 'local';
  function f() { return scope; }
  return f();
}

console.log(checkScope()); // local


function checkAgain() {
  let scope = 'local';
  function f() { return scope; }
  return f;
}

console.log(checkAgain());   // [Function: f]
console.log(checkAgain()()); // local


let uniqueInt = (function() {
    let counter = 0;
    return function() { return counter++; }
}());

console.log(uniqueInt()); // 0
console.log(uniqueInt()); // 1


function counter() {
  let n = 0;
  return {count: function() { return n++; },
          reset: function() { n = 0; }};
}

let c = counter(),
  d = counter();
console.log(c.count()); // 0
console.log(d.count()); // 0
c.reset();
console.log(c.count()); // 0
console.log(d.count()); // 1


function counter2(n) {
  return {get count() { return n++; },
          set count(m) {
            if (m > n) n = m;
            else throw Error('count can only be set to a larger value');
          }};
}

let e = counter2(1000);
console.log(e.count); // 1000
console.log(e.count); // 1001
e.count = 2000;
console.log(e.count); // 1000
//e.count = 2000; // error


/* This function adds property accessor methods for a property with the 
 * specified name to the object o.  The methods are named get<name> and 
 * set<name>.  If a predicate function is supplied, the setter method uses it 
 * to test its argument for validity before storing ig.  If the pred returns
 * false, the setter throws an exception.
 *
 * The unusual thing about this function is that the prop val that is 
 * manipulated by the getter and setters is not stored in the obj o.  The val
 * is stored only in a local var in this func.  The getter/setter are also 
 * defined  locally to this func and therefore have access to this local var.
 * This means the val is private to the two accessor methods, and it cannot be
 * set or modified except through the setter.
 */
function addPrivateProperty(o, name, predicate) {
  let value;
  o[`get${name}`] = function() {return value; };
  o[`set${name}`] = function(v) {
    if (predicate && !predicate(v)) {
      throw new TypeError(`set${name}: invalid value ${v}`);
    } else value = v;
  };
};


let o = {};
addPrivateProperty(o, 'Name', x => typeof x === 'string');
o.setName('Frank');
console.log(o.getName()); // Frank
o.setName('Bill');
//o.setName(0);           // TypeError


function constFunc(v) { return () => v; }


let funcs = [];
for (let i = 0; i < 10; i++) funcs[i] = constFunc(i);
console.log(funcs[7]()); // 7


function constFuncs() {
  let funcs = [];
  for (let i = 0; i < 10; i++) funcs[i] = () => i;
  return funcs;
}

let funcs2 = constFuncs();
console.log(funcs2[5]()); // 5


