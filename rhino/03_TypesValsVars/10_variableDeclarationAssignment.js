let o = {x: 1, y: 2};

for (const [name, val] of Object.entries(o)) {
  console.log(name, val); // x 1  y 2
}

let [x, ...y] = [1, 2, 3, 4];
console.log(y); // [2, 3, 4]

let transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0};
let {r, g, b} = transparent;
console.log(r + " " + g + " " + b); // 0.0 0.0 0.0

  
  
