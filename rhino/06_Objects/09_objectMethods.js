// 1. toString()
let s = {x: 1, y:1}.toString(); // [object Object]
let point = {
  x: 1, y: 2, toString: function() { return `(${this.x}, ${this.y})`; }};
console.log(s);
console.log(String(point)); // (1, 2)



// 2. toLocaleString()
point= {
  x: 1000,
  y: 2000,
  toString: function() { return `(${this.x}, ${this.y})`; },
  toLocaleString: function() {
    return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`;
  }};
console.log(point.toString()); // (1000, 2000)
console.log(point.toLocaleString()); // (1,000, 2,000)



// 3. valueOf()
point = {
  x: 3, y: 4, valueOf: function() { return Math.hypot(this.x, this.y); }};
console.log(Number(point)); // 5
console.log(point > 4);     // true



// 4. toJSON()
point = {
  x: 1,
  y: 2,
  toString: function() { return `(${this.x}, ${this.y})`; },
  toJSON: function() { return this.toString(); }};
console.log(JSON.stringify([point])); // ["(1, 2)"]

