function dance() {
  console.log("I'm shakin' my ass to the beat.");
}


function sing(song, callback) {
  console.log(`I\'m singing along to ${song}.`);
  callback();
}

sing('Stop!', dance);
sing('Pineapple Upside-down Song', () => {
    console.log("I'm standing on my head.");
});


// Sorting arrays with a callback
console.log([1, 3, 12, 5, 23, 18, 7].sort()); // 1, 12, 18, 23...!
