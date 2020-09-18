let o = {s: '', n: 0, a: [true, false, null]};
let s = JSON.stringify(o);
console.log(s);    // '{"s":"","n":0,"a":[true,false,null]}'
let copy = JSON.parse(s);
console.log(copy); // { s: '', n: 0, a: [ true, false, null ] }


// works, but not esp effficient
function deepcopy(o) { return JSON.parse(JSON.stringify(o)); }


console.log(JSON.stringify(o, null, 2)); // adds formatting



// 1. JSON Customizations
let data = JSON.parse(text, function(key, value) {
    // remove props starting with _
    if (key[0] === '_') return undefined;

    // Convert ISO dates
    if (typeof value === 'string'
        && /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)) {
      return new Date(value);
    }

    // All others unchanged
    return value;
});


// what fields to stingify, and in what order?
let text = JSON.stringify(address, ['city', 'state', 'country']);

// skip regex props
let json = JSON.stringify(o, (k, v) => instanceof RegExp ? undefined : v);
