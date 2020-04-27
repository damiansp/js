let Pet = function(name, nLegs) {
  this.name = name;
  this.nLegs = nLegs;
};

Pet.prototype.getDetails = function() {
  return this.name + ' has ' + this.legs + ' legs.';
};


let Cat = function(name) {
  Pet.call(this, name, 4);
};

Cat.prototype = new Pet();

Cat.prototype.action = function() {
  return 'Catch a bird.';
};


let petCat = new Cat('Felix');
console.log(petCat.getDetails());
console.log(petCat.action());
petCat.name = 'Sylvester';
petCat.legs = 8;
console.log(petCat.getDetails());

  
