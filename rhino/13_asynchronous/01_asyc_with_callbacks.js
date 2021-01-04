const fs = require('fs');
const https = require('https');


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
let options = {};

fs.readFile('config.json', 'utf-8', (err, text) => {
    if (err) console.warn('Could not read config file:', err);
    else Object.assign(options, JSON.parse(text));
    //startProgram(options);
});


function getText(url, callback) {
  request = https.get(url);
  request.on('response', response => {
      let httpStatus = response.statusCode;
      let body = '';
      response.setEncoding('urf-8');
      response.on('data', chunk => { body += chunk; });
      response.on('end', () => {
          if (httpStatus === 200) callback(null, body);
          else callback(httpStatus, null);
      });
  });
  request.on('error', (err) => { callback(err, null); });
}
