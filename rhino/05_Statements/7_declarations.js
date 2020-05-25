// 1. const, let, var
const PI = Math.PI;
const TAU = 2 * PI;
let radius = 3;
let circumference = TAU * radius;
console.log(circumference);



// 2. function
function area(radius) { return Math.PI * radius * radius; }



// 3. class
class Circle {
  constructor(radius) { this.r = radius; }
  area() { return Math.pi * this.r * this.r; }
  circumference() { return TAU * this.r; }
}



// 4. import, export
//export { PI, TAU };

// In another file:
//import Circle from './7_declarations.js'
//import { PI, TAU } from './7_declarations.js'
//import { magnitude as hypotenuse } from 'vectors/utils.js'


