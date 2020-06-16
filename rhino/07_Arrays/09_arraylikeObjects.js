let a = {};

// add props to make "array-like"
let i = 0;
while(i < 10) {
  a[i] = i * i;
  i++;
}
a.length = i;

// Iterate through like an array!
let total = 0;
for (let j = 0; j < a.length; j++) { total += a[j]; }
console.log(total); // 285


function isArrayLike(o) {
  if (o
      && typeof o == "object"
      && Number.isFinite(o.length)
      && o.length > 0
      && Number.IsInteger(o.length)
      && o.length < 4294967295) {
    return true;
  }
  return false;
}


let b = {'0': 'a', '1': 'b', '2': 'c', length: 3};
console.log(Array.prototype.join.call(b, '+')); // a+b+c
console.log(Array.prototype.map.call(b, x => x.toUpperCase())); // [A, B, C]
console.log(Array.prototype.slice.call(b, 0)); // [a, b, c] (true array copy)
console.log(Array.from(b));                    // easier copy
