const uniqueID = Symbol('this is a unique ID');
console.log(uniqueID);
console.log(typeof uniqueID);
console.log(String(uniqueID));

const B = Symbol.for('this is a unique ID');
console.log(uniqueID == B);
console.log(uniqueID === B);
