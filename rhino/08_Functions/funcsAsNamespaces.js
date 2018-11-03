function myModule() {
  // Any vars used by the module are local to this func instead of cluttering
  // global namespace
}

myModule();

// or
(function() {
  // myModule code here
}());

