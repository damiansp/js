var avengers = [
  'Black Widow', 'Captain America', 'Hawkeye', 'Iron Man', 'Ant Man'];

for (var i = 0; i < avengers.length; i++) {
  console.log(avengers[i]);
}

for (var i in avengers) {
  console.log(avengers[i]);
}

// ES6 on:
for (const val of avengers) {
  console.log(val);
}


// Looping over maps
const romanNumerals = new Map();
romanNumerals.set(1, 'I').set(2, 'II').set(3, 'III').set(4, 'IV').set(5, 'V');
console.log(romanNumerals);

// ES6+
for (const key of romanNumerals.keys()) {
  console.log(key);
}

// ES6+
/**
for (const [k, v] of romanNumerals.entries()) {
  console.log(`${k} => ${v});
}
*/



