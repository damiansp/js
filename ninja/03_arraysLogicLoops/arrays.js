const myArray = []; // same as 
const myArray2 = new Array();

const heroes = [];
console.log(heroes[0]); // undefined  

heroes[0] = 'Spider-Man';
heroes[1] = 'Wolverine';
heroes[2] = 'Phoenix';
heroes[5] = 'Storm';
console.log(heroes);

const theAvengers = [
  'Captain America', 'Iron Man', 'Thor', 'Ant-Man', 'Wasp', 'Hulk'];
const mixedArray = [null, 1, [], 'two', true];
delete theAvengers[0];
console.log(theAvengers);
console.log(theAvengers[0]);

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
console.log([1, 5, 9, 10, 100].sort()); // [1, 10, 100, 5, 9]

// Find
console.log(avengers.indexOf('Iron Man'));   // 4
console.log(avengers.indexOf('Spider-Man')); // -1
// Newest version of js only:
//console.log(avengers.includes('Iron Man'));  // true
//console.log(avengers.includes('Ant Man', 1)); // false (starting fr idx 1)



// Multi-dim arrays
const coordinates = [[5, 0], [4, 3], [3, 4], [0, 5]];
console.log(coordinates[1][1]); // 4
const summer = ['Jun', 'Jul', 'Aug'];
const winter = ['Dec', 'Jan', 'Feb'];
const nested = [summer, winter];
// New js only:
//const flat = [...summer, ...winter];
console.log(nested);
//console.log(flat);



// Sets
const weeSet = new Set();
weeSet.add(1);
console.log(weeSet);

weeSet.add(2).add(3).add(4);
console.log(weeSet);

const numbers = new Set([1, 2, 3, 4]);
console.log(numbers);

const letters = new Set(['hello']);
console.log(letters);

const arrays = new Set().add([1]).add([1]); // objects are unique so
                                            // "duplicates" permitted
console.log(arrays); // {[1], [1]}

const mixedTypes = new Set().add(2).add('two');
const JLA = new Set(['Superman', 'Batman', 'Wonder Woman']);
console.log(JLA.size);
console.log(JLA.has('Green Lantern'));
console.log(JLA[0]); // undefined

// removing from sets
console.log(JLA.delete('Superman')); // true
console.log(JLA.delete('Flash'));    // false

JLA.clear();
console.log(JLA); // Set {}

// Set-array conversion
const shoppingSet = new Set(['apples', 'bananas', 'beans']);
//const shoppingArray = [...shoppingSet]; // New JS notation only  // or:
const shoppingArray2 = Array.from(shoppingSet);



// Weak Sets
var array = [1, 2, 3];
const strong = new Set().add(array);

array = null;
console.log(strong); // {[1, 2, 3]}, NOT null

const array2 = [1, 2, 3];
const weak = new WeakSet().add(array2);



// Maps
const romanNumerals = new Map();
romanNumerals.set(1, 'I').set(2, 'II').set(3, 'III').set(4, 'IV').set(5, 'V');
console.log(romanNumerals);
console.log(romanNumerals.has(5)); // true
console.log(romanNumerals.get(5)); // 'V'
console.log(romanNumerals.size);   // 5
romanNumerals.delete(4);
console.log(romanNumerals);
romanNumerals.clear();
console.log(romanNumerals);

//console.log([...romanNumerals]); // to array
console.log(Array.from(romanNumerals)); // to array
