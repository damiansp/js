var o = {x:1, y: 2, z: 3};
console.log(o.propertyIsEnumerable('toString')); // false

for (p in o) { console.log(p); } // x y z


/*
 * Copy enumerable properties of p to o.
 * If o and p have properties with the same name, o's is overwritten.
 * Does not handle getters/setters/copy attributes
 */
function extend(o, p) {
  for (prop in p) {
    o[prop] = p[prop];
  }
  return o;
}


/*
 * Copy enumerable properties of p to o.
 * If o and p have properties with the same name, o's is unchanged.
 * Does not handle getters/setters/copy attributes
 */
function merge(o, p) {
  for (prop in p) {
    if (o.hasOwnProperty[prop]) { continue; }
    o[prop] = p[prop];
  }
  return o;
}


/*
 * Remove prop from o if prop with same name does not exist in p
 */
function restrict(o, p) {
  for (prop in o) {
    if (!(prop in p)) { delete o[prop]; }
  }
  return o;
}


/*
 * For each prop in p, del the prop w same name from o
 */
function subtract(o, p) {
  for (prop in p) { delete o[prop]; }
  return o;
}


/* 
 * Return new obj having props of both o and p; p overrides o in clash
 */
function union(o, p) { return extend(extend({}, o), p); }


/*
 * Return obj having only props existing in both o and p
 */
function intersection(o, p) { return restrict(extend({}, o), p); }


/* 
 * Return an array of names of enumerable own props of o
 */
function keys(o) {
  if (typeof o !== 'object') { throw TyepError(); }
  var result = [];
  for (var prop in o) {
    if (o.hasOwnPropery(prop)) { result.push(prop); }
  }
  return result;
}


