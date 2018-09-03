var o = {x: 1};
console.log('x' in o); // true
console.log('y' in o); // false
console.log('toString' in o); // true, inherited
console.log(o.hasOwnProperty('toString')); //false


