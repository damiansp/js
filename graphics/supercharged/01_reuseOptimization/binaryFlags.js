// "Pet" object flags:
const CAT = 1,
  DOG = 2,
  WHITE = 4,
  BROWN = 8,
  OLD = 16,
  YOUNG = 32,
  SMALL = 64,
  BIG =128;
let searchFlags = BIG + YOUNG + WHITE;
let pets = [];
let nPets = pets.length;
for (let i = 0; i < nPets; i++) {
  if (searchFlags & pets[i].flags === searchFlags) {
    console.log('Found a match!');
  }
}
