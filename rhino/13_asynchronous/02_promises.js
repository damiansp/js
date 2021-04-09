const http = require('http');


// 1. Using Promises
getJSON(url).then(jsonData => {
    // This is a callback function that will be asynchronously invoked with the
    // parsed JSON value when it becomes available
});


function displayUserProfile(profile) {}

getJSON('/api/user/profile').then(displayUserProfile, handleError); // or
getJSON('/api/user/profile').then(displayUserProfile).catch(handleError)



// 2. Chaining Promises
fetch(documentURL)
  .then(repsonse => response.json())
  .then(document => { return render(document); })
  .then(rendered => { cachInDatabase(rendered); })
  .catch(error => handle(error));


fetch('/api/user/profile').then(response => {
    if (response.ok
        && response.headers.get('Content-Type') === 'application/json') {
      // ? Don't actually have the reponse body yet
    }
});


fetch('api/user/profile').then(repsonse => {
    response.json().then(profile => {
        displayUserProfile(profile);
    });
});


// ...bad to nest like prev; better:
fetch('/api/user/profile')
  .then(response => { return repsonse.json(); })
  .then(profile => { displayUserProfile(profile) });


vv
// 3. Resolving Promises
function c1(response) {      // callback 1
  let p4 = response.json();  // promise 4
  return p4;
}


function c2(profile) { displayUserProfile(profile); }


let p1 = fetch('/api/user/profile');
let p2 = p1.then(c1);
let p3 = p2.then(c2);


// 4. More on Promises and Errors
fetch('api/user/profile')
  .then(response -> {
      if (!response.ok) return null;

      let type = response.headers.get('content-type');
      if (type !== 'application/json') {
        throw new TypeError(`Expected JSON, got ${type}`);
      }
      return response.json();
  }).then(profile => {
      if (profile) displayUserProfile(profile);
      else displayLoggedOutProfilePage();
  }).catch(e => {
      if (e instanceof NetworkError) {
        displayErrorMessage('Check internet connection');
      } else if (e instanceof TypeError) {
        displayErrorMessage('Something wrong with our servers');
      } else console.error(`Unexpected error ${e}`);
  });


// 5. Promises in Parallel
const urls = ['my/url1', 'my/2nd/url', '...'];
promises = urls.map(url => fetch(url).then(r => r.text()));
// Run promises in parallel
Promise.all(promises)
  .then(bodies => { /* do whatever... */})
  .catch(e => console.error(e));

Promise.allSettled([Promise.resolve(1), Promise.reject(2), 3])
  .then(results => {
      results[0]; // {status: 'fulfilled, value: 1}
      results[1]; // {status: 'rejected, reason: 2}
      results[2]; // {status: 'fulfilled, value: 3}
  });


// 6. Making Promises
function wait(duration) {
  // Create and return a new Promise
  return new Promise((resolve, reject) => {
      if (duration < 0) reject(new Error("Cannot go back in time"));
      // Else wait asynchronously and then resolve.  setTimeout() will invoke
      // resolve() with no args, so Promise will fulfill with undefined val
      setTimeout(resolve, duration);
  });
}


// async getJSON from scratch
function getJSON(url) {
  return new Promise((resolve, reject) => {
      let request = http.get(url, response => {
          if (response.statusCode !== 200) {
            reject(new Error(`HTTP status: ${response.statusCode}`));
            response.resume(); // prevent momory leak
          } else if (response.headers['content-type'] !== 'application/json') {
            reject(new Error('Invalid content type'));
            response.resume();
          } else {
            let body = '';
            response.setEncoding('utf-8');
            response.on('data', chunk => {  body += chunk; });
            response.on('end', () => {
                try {
                  let parsed = JSON.parse(body);
                  resolve(parsed);
                } catch(e) reject(e);
            });
          }
      });
      request.on('error', error => { reject(error); });
  });
}



// 7. Promises in Sequence
function fetchSequentially(urls) {
  const bodies = [];

  function fetchOne(url) {
    return fetch(url)
      .then(response => response.text())
      .then(body => { bodies.push(body); });
  }

  let p = Promise.resolve(undefined);
  for (url of urls) { p = p.then(() => fetchOne(url)); }
  return p.then(() => bodies);
}

fetchSequentially(urls)
  .then(bodies => { /* do whatever */ })
  .catch(e => console.error(e));


function promiseSequence(inputs, promiseMaker) {
  inputs = [...inputs]; // copy to modify

  function handleNextInput(outputs) {
    if (inputs.length === 0) return outputs;
    else {
      let nextInput = inputs.shift();
      return promiseMaker(nextInput)
        .then(output => outputs.concat(output))
        .then(handleNextInput);
    }
  }

  return Promise.resolve([]).then(handleNextInput);
}


function fetchBody(url) { return fetch(url).then(r => r.text()); }

promiseSequence(urls, fetchBody)
  .then(bodies => {/* do... */} )
  .catch(console.error);
