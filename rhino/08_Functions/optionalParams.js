// Append names of the enumerable porperties of object o to the array a, and
// return a.  If a omitted, create and return a new array
function getPropertyNames(o, /* optional */ a) {
  a = a || [];
  for (var property in o) a.push(property);
  return a;
}

