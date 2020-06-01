let o = {x: 1, y: 2, z: 3};
console.log(o.propertyIsEnumerable("toString")); // false
for (let p in o) { console.log(p); } // x y z

for (let p in o) {
  if (!o.hasOwnProperty(p)) { continue; } // Skip inherited
  if (typeof o[p] === "function") { continue; } // Skip methods
  console.log(o[p]); // 1 2 3 
}
