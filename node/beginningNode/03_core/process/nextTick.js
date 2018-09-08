var i = 0;

process.nextTick(function() {
    console.log('next tick');
    i++;
});

console.log('immediate');
setTimeout(function() {
    console.log('after timeout');
}, 1000);

