let o = {s: '', n: 0, a: [true, false, null]};
let s = JSON.stringify(o);
console.log(s);    // '{"s":"","n":0,"a":[true,false,null]}'
let copy = JSON.parse(s);
console.log(copy); // { s: '', n: 0, a: [ true, false, null ] }


// works, but not esp effficient
function deepcopy(o) { return JSON.parse(JSON.stringify(o)); }
