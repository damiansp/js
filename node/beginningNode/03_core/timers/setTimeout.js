setTimeout(function() {
    console.log('timeout 1 completed');
    setTimeout(function() {
        console.log('timeout 2 completed');
    }, 3000);
}, 3000);

var i = 0;
var intervalObject = setInterval(function() {
    i++;
    console.log(i + ' seconds passed');
    if (i > 6) {
      console.log('all done.');
      clearInterval(intervalObject);
    }
}, 1000);
