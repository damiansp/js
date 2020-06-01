let target = {x: 1},
  source = {y: 2, z: 3};

for (let key of Object.keys(source)) { target[key] = source[key]; }
console.log(target); // {x: 1, y: 2, z: 3}

// like Object.assign() but won't override exisitng
function merge(target, ...sources) {
  for (let source of sources) {
    for (let key of Object.keys(source)) {
      if (!(key in target)) { target[key] = source[key]; }
    }
  }
  return target;
}


Object.assign({x: 1}, {x: 2}, {y: 3, z: 4}); // {x: 2, y: 3, z: 4}
merge({x:1}, {x: 2, y:2}, {y:3, z: 4});      // {x: 1, y: 2, z: 4}
