// 1. Timers
let count = 0;
let updateCount = setInterval(reportStatus, 5000);

function stopReports() {
  clearInterval(updateCount);
  console.log('Done reporting.');
}


function reportStatus() {
  count++;
  console.log('Count: ' + count);
  if (count >= 3) stopReports();
}

setTimeout(reportStatus, 5000);



// 2. Events
/*
let okay = document.querySelector('#confrimUpdateDialogue button.okay');
okay.addEventListener('click', applyUpdate);
*/



// 3. Network Events
function getCurrentVersionNumber(versionCallback) {
  // Make a scripted http request to a backend version API
  let request = new XMLHttpRequest();
  request.open('GET', 'http://www.example.com/api/version');
  request.send();

  // Register a callback that will be invoked when the response arrives
  request.onload = function() {
    if (request.status === 200) {
      // If http status is good, get version no. and call callback
      let currentVersion = parseFloat(request.responseText);
      versionCallback(null, currentVersion);
    } else {
      // Otherwise report an error to the callback
      versionCallback(responsse.statusText, null);
    }
  };

  // Register another callback that will be invoked for network errors
  request.onerror = request.ontimeout = function(e) {
    versionCallback(e.type, null);
  };
}



// 4. Callbacks and Events in Node
