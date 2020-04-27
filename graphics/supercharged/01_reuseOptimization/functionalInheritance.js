let pet = function(name, nLegs) {
  // Create an obj literal (that). Include a public name; nLegs will be private.
  let that = {
    name: name,
    getDetails: function() { return `${that.name} has ${nLegs} legs`; }};
  return that;
};

let cat = function(name) {
  var that = pet(name, 4);
  that.action = function() { return 'Catch a bird.'; }
  return that;
};

let petCat = cat('Felix');
console.log(petCat.getDetails());
console.log(petCat.action());

petCat.name = 'Sylvester';
petCat.nLegs = 8; // does nothing
console.log(petCat.getDetails());
