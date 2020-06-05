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
let position = {x: 0, y: 0};
let dimensions = {width: 100, height: 75};
let rect = {...position, ...dimensions};
console.log(rect);
console.log([rect.x + rect.width, rect.y + rect.height]);

let o5 = {x: 1};
let p2 = {x: 0, ...o};
console.log(p2.x); // 1
let q = {...o5, x: 2};
console.log(q.x);  // 2

// works only on own props
let o6 = Object.create({x: 1}); // o6 inherits x
let p3 = {...o6};
console.log(p3.x);              // undefined



// 5. Shorthand Methods
let square = {area: function() { return this.side * this.side; },
              side: 10};
console.log(square.area()); // 100

let sq = {area() { return this.side * this.side; },
          side: 10};
console.log(sq.area());     // 100

const METHOD_NAME = 'm';
const symbol = Symbol();
let weirdMethods = {'method With Spaces'(x) { return x + 1; },
                    [METHOD_NAME](x) { return x + 2; },
                    [symbol](x) { return x + 3; }};
console.log(weirdMethods['method With Spaces'](1));
console.log(weirdMethods[METHOD_NAME](1));
console.log(weirdMethods[symbol](1));



// 6. Property Getters and Setters
let o7 = {dataProp: 11, // ordinary data property
          get accessorProp() { return this.dataProp; },
          set accessorProp(value) { this.dataProp = value; }};
let p4 = {x: 1.0, // x, y regular read/write props
          y: 1.0,
          // r is read/write accessor prop with getter and setter
          get r() { return Math.hypot(this.x, this.y); },
          set r(val) {
            let oldval = Math.hypot(this.x, this.y);
            let ratio = val / oldval;
            this.x *= ratio;
            this.y *= ratio;
          },
          // theta is read-only with getter only
          get theta() { return Math.atan2(this.y, this.x); }};
console.log(p4.r);
console.log(p4.theta);
p4.r = 5;
console.log(p4.r);

let q2 = Object.create(p4); // inherits getters/setters
q2.x = 3;
q2.y = 4;
console.log(q2.r, q2.theta);

/** Obj generates stictly increasing serial nos. */
const serialNum = {
  _n: 0, // _ indicates "private"
  get next() { return this._n++; },
  set next(n) {
    if (n > this._n) { this._n = n; }
    else throw new Error("serial no. can only be set to value larger than "
                         + "current: " + this._n + "\n");
  }};
serialNum.next = 10;
console.log(serialNum.next);
console.log(serialNum.next);
// serialNum.next = 1;

/** Obj has accessor props that return rand nos. */
const random = {
  get octet() { return Math.floor(Math.random() * 256); },
  get uint16() { return Math.floor(Math.random() * 65536); },
  get int16() { return Math.floor(Math.random() * 65536) - 32768; }};

                 

