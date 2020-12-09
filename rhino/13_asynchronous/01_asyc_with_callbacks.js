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
