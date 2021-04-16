// 1. await
let response = await fetch('/api/user/profile');
let profile = await response.json();




// 2. async functions
/** Returns a Promise */
async function getHighScore() {
  let response = await fetch('/api/user/profile');
  let profile = await response.json();
  return profile.highScore;
}

displayHighscore(await getHighScore());
getHighScore().then(displayHighScore).catch(console.error);



// 3. Awaiting multiple promises
async function getJSON(url) {
  let response = await fetch(url);
  let body = await response.json();
  return body;
}

let val1 = await getJSON(url1);
let val2 = await getJSON(url2);

// better:
let [val1, val2] = await Promise.all([getJSON(url1), getJSON(url2)]);



// 4. Implementation details
async function f(x) { /* body */; } // equiv to:

function f(x) {
  return new Promise(function(resolve, reject) {
      try { resolve((function(x) { /* body */; })(x)); }
      catch(e) { reject(e); }
  });
}
