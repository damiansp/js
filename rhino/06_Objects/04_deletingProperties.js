let book = {'title': 'JavaScript',
            'sub-title': 'The big one',
            for: 'all',
            author: { firstname: 'Bob', surname: 'Dobolina'}};
delete book.author;
delete book['title'];

let o = {x: 2};
delete o.x; // true and deletes x
delete o.x; // true and does nothing
delete o.toString; // true does nothing (toString is inherited)
delete 1;          // true does nothing

// TypeError for each of these if strict mode
delete Object.prototype; // false
let x = 1;
delete globalThis.x;     // false, can't delete this prop
function f() {}
delete globalThis.f;    // false can't delete

globalThis.x = 1;
delete x; // true, deleted

  
