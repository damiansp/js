function longRunningOperation(callback) {
  // sim 3s op
  setTimeout(callback, 3000);
}


function webRequest(req) {
  console.log('starting a long op for request:', req.id);
  longRunningOperation(function() {
      console.log('ending a long op for request:', req.id);
  });
}


for (var i = 0; i < 10; i++) {
  webRequest({id: i});
}
