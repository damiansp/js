setTimeout(() => { console.log('Ready...'); }, 1000);
setTimeout(() => { console.log('Set...'); }, 2000);
setTimeout(() => { console.log('Go!'); }, 3000);

let clock = setInterval(() => {
    console.clear();
    console.log(new Date().toLocaleTimeString());
}, 1000);

setTimeout(() => { clearInterval(clock); }, 10000); // shut it down
