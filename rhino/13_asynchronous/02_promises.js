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
