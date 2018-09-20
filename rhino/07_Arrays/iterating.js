var keys = Object.keys(o);
var values = [];

for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  values[i] = o[key];
}

// for performance, look up length only once
for (var i = 0, len = keys.length; i < len; i++) {
  if (!(a[i])) continue;           // skip null, undef, nonexistant
  if (a[i] == undefined) continue; // skip undef, nonex
  if (!(i in a)) continue;         // skip nonex
}





