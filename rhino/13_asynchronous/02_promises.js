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
