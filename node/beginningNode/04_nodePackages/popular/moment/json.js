var date = new Date(Date.UTC(2007, 0, 1));
var jsonString = date.toJSON();

console.log('Original:', date);
console.log(jsonString);
console.log(new Date(jsonString));
  
