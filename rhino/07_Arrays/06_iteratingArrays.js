let letters = [...'hello world'];
let string = '';
for (let letter of letters) { string += letter; }
console.log(string); // hello world

let everyother = '';
for (let [i, letter] of letters.entries()) {
  if (i % 2 === 0) { everyother += letter; }
}
console.log(everyother); // hlowrd
