let o = {x: 1, y: {z: [false, null, ""]}};
let s = JSON.stringify(o);
let p = JSON.parse(s);

console.log(s);
console.log(p);
