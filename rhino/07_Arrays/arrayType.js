console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false
console.log([] instanceof Array); // true
console.log(({}) instanceof Array); // false

var isArray = Function.isArray || function(o) {
  return (typeof o === "object"
          && Object.prototype.toString.call(o) === '[object Array]');
};

