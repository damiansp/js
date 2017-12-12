function computeIntersection(arr1, arr2, callback) {
  var results = [];

  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        results[results.length] = arr2[j];
        break;
      }
    }
  }

  callback(null, results); // no error, pass in results
}

function printIntersection(err, results) {
  if (err) { throw err; }
  console.log(results);
}

var a1 = [1, 2, 3, 4, 5, 6],
  a2 = [2, 4, 6, 8, 10, 12];

computeIntersection(a1, a2, printIntersection);


// Same but occasionally relinquishes control to other tasks
function computeIntersection2(arr1, arr2, callback) {
  // break up the bigger array into 2 arrays
  var bigger = arr1.length > arr2.length ? arr1 : arr2;
  var smaller = bigger == arr1 ? arr2 : arr1;
  var bigLen = bigger.length;
  var smallLen = smaller.length;
  var startIndex = 0; // start index for any chunk
  var chunkSize = 10;
  var results = [];

  // for each chunk of <chunkSize> elements in bigger, search through smaller
  function computePartialIntersection() {
    for (var i = startIndex; i < (startIndex + chunkSize) && i < bigLen; i++) {
      for (var j = 0; j < smallLen; j++) {
        if (bigger[i] == smaller[j]) {
          results.push(smaller[j]);
          break;
        }
      }
    }

    if (i >= bigLen) {
      callback(null, results);
    } else {
      startIndex += chunkSize;
      process.nextTick(computePartialIntersection);
    }
  }

  computePartialIntersection();
}

a1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
a2 = [0, 3, 6, 9, 12, 15, 18];
computeIntersection2(a1, a2, printIntersection);


computeIntersection2(a1, a2, function(err, results) {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
});
