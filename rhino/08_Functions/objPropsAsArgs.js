/**
 * Copy length elements of the array 'from' to the array 'to'.  Begin copying
 * with element 'fromStart' in 'from' and copy that element to 'toStart' in 
 * 'to'. Arg order is difficult to remember...
 */
function arrayCopy(from, fromStart, to, toStart, length) { /* ... */ }


/**
 * Less efficient but easier interface
 */
function easyCopy(args) {
  arraycopy(
    args.from, args.fromStart || 0, args.to, args.toStart || 0, args.length);
}


var a = [1, 2, 3, 4],
  b = [];
easyCopy({from: a, to: b, length: 4});

