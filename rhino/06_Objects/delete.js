//delete book.author;
//delete book['title'];

o = {x: 1};
delete o.x; // deletes x -> true
delete o.x; // do nothing -> true
delete o.toString; // do nothing -> true
delete 1;          // nonsense -> true

var x = 1;
delete this.x;     // can't delete this property

function f() {}
delete this.f;     // nope
