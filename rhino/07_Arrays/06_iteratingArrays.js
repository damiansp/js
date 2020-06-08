let letters = [...'hello world'];
let string = '';
for (let letter of letters) { string += letter; }
console.log(string); // hello world

let everyother = '';
for (let [i, letter] of letters.entries()) {
  if (i % 2 === 0) { everyother += letter; }
}
console.log(everyother); // hlowrd


let uppercase = '';
letters.forEach(letter => {uppercase += letter.toUpperCase(); });
console.log(uppercase); // HELLO WORLD

let vowels = '';
for (let i = 0; i < letters.length; ++i) {
  let letter = letters[i];
  if (/[aeiou]/.test(letter)) { vowels += letter; }
}
console.log(vowels); // eoo
