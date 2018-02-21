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
