function myModule() {
  // Any vars used by the module are local to this func instead of cluttering
  // global namespace
}

myModule();

// or
(function() {
  // myModule code here
}());


var extend = (function() {
    // Check for known IE bug
    for (var p in {toString: null}) {
      // for/in works correctly: return simple extend() function
      return function extend(o) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var prop in source) o[prop] = source[prop];
        }
        return o;
      };
    }
    // for/in did not enumerate the toString property: return patched version
    var protoprops = [
      'toString', 'valueOf', 'constructor', 'hasOwnProperty', 'isPrototypeOf',
      'propertyIsEnumerable', 'toLocaleString'];
    return function patched_extend(o) {
      for (var i = 1; i < arguments.length; i++) {
        for (var prop in source) o[prop] = source[prop];
        for (var j = 0; j < protoprops.length; j++) {
          prop = protoprops[j];
          if (source.hasOwnProperty(prop)) o[prop] = source[prop];
        }
      }
      return o;
    };
}());
