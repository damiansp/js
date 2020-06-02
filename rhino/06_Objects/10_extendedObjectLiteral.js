// 1. Shorthand Props
let x = 1,
  y = 2;
let o = {x: x, y: y};

// ES6+:
let o2 = {x, y};
console.log(o2.x + o2.y); // 3



// 2. Computed Prop Names
const PROP_NAME = 'p1';
function computePropName() { return 'p' + 2; }

let o3 = {};
o3[PROP_NAME] = 1;
o3[computePropName()] = 2;
console.log(o3); // {p1: 1, p2: 2}

let p = {[PROP_NAME]: 1, [computePropName()]: 2};
console.log(p); // {p1: 1, p2: 2}



// 3. Symbols as Prop Names
const extension = Symbol('my extension symbol');
let o4 = {[extension]: { /* ext data stored here */ }};
o4[extension].x = 0;
console.log(o4); // {[Symbol(my extension symbol)]: {x: 0}}



// 4. Spread Operator
          
