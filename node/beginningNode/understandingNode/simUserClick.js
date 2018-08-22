function longRunningOperation(callback) {
  // simulate a 3s process
  setTimeout(callback, 3000);
}


function userClicked() {
  console.log('starting a long operation');
  longRunningOperation(function() { console.log('ending a long operation'); });
}


for (var i = 0; i < 10; i++) { userClicked(); }
