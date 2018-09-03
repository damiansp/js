function someClass() {
  this.someProperty = 'some initial value';
}

// Member funcs
someClass.prototype.someMemberFunction = function () {
  this.someProperty = 'modified value';
};

var instance = new someClass();

console.log(instance.someProperty); // some initial value
instance.someMemberFunction();
console.log(instance.someProperty); // modified value
  
