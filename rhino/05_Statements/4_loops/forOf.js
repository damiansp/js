let data = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  sum = 0;

for (let elem of data) { sum += elem; }
console.log(sum);


let o = {x: 1, y: 2, z: 3};
let keys = '';
sum = 0;

for (let k of Object.keys(o)) { keys += k; }
for (let v of Object.values(o)) { sum += v; }
console.log(keys);
console.log(sum);
for (let [k, v] of Object.entries(o)) { console.log(k + ": " + v); }


let freq = {};

for (let letter of "mississippi") {
  if (freq[letter]) { freq[letter]++; }
  else { freq[letter] = 1; }
}
console.log(freq);


let theme = 'Na na na na na na na na Batman!';
let lyricSet = new Set(theme.split(' '));
let unique = [];

for (let word of lyricSet) { unique.push(word); }
console.log(unique);


let m = new Map([[1, "one"], [2, "two"]]);
for (let [k, v] of m) { console.log(k + " => " + v); }


// asynchronous iteration
async function printStream(stream) {
  for await (let chunk of stream) { console.log(chunk); }
}
