// 1. Optional Parameters and Defaults

// Appnd names of enumerable props of obj o to array a and return a.
function getPropertyNames(o, a) {
  a = a || [];
  for (let prop in o) a.push(prop);
  return a;
}

let o = {x:1},
  p = {y:2, z: 3};
let a = getPropertyNames(o);
a = getPropertyNames(p, a);
console.log(a); // x y z


function getPropNames(o, a=[]) {
  for (let prop in o) a.push(prop);
  return a;
}

a = getPropNames(o);
a = getPropNames(p, a);
console.log(a); // x y z

const rectangle = (w, h=2*w) => ({w, h});
console.log(rectangle(1, 3)); // {w: 1, h: 3}
console.log(rectangle(1));    // {w: 1, h: 2}
