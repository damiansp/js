const myArray = []; // same as
const myArray2 = new Array();

const heroes = [];
console.log(heroes[0]); // undefined

heroes[0] = 'Spider-Man';
heroes[1] = 'Wolverine';
heroes[2] = 'Phoenix';
heroes[5] = 'Storm';
console.log(heroes);

const avengers = [
  'Captain America', 'Iron Man', 'Thor', 'Ant-Man', 'Wasp', 'Hulk'];
const mixedArray = [null, 1, [], 'two', true];
delete avengers[0];
console.log(avengers);
console.log(avengers[0]);
  
