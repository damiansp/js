// Destructuring arrays
/** New version of js only
    const [x, y] = [1, 2];
    console.log(x, y);
    [x, y] = [y, x];
    console.log(x, y);
*/


// Array properties and methods
var avengers = [
  'Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'];
console.log(avengers.length);
//avengers.length = 8; // adds 'undefined' values
console.log(avengers);


// pop, push, shift, unshift
console.log(avengers.pop()); // Black Widow
console.log(avengers.shift()); // Captain America
console.log(avengers.push('Wasp')); // adds to end
console.log(avengers.unshift('Ant Man')); // adds to front
console.log(avengers);


// Merging arrays
avengers = avengers.concat(['Black Panther', 'Mr. Fantastic']);
console.log(avengers);


// join
console.log(avengers.join());
console.log(avengers.join(' & '));


// slice, splice
console.log(avengers.slice(2, 4)); // [Thor, Hulk], avengers unchanged
avengers.splice(3, 0, 'Scarlet Witch');
console.log(avengers); // ^ Inserts 'Scarlet Witch' between Thor and Hulk
console.log(avengers.splice(3, 1, 'Namor')); // Returns 'Scarlet Witch',
                                             // and replaces with 'Namor'
console.log(avengers);


// reverse
console.log(avengers.reverse()); // changes in place


// sort
console.log(avengers.sort()); // changes in place
