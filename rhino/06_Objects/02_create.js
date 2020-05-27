// 1. Object literals
let empty = {};
let point = {x: 0, y: 0};
let p2 = {x: point.x, y: point.y + 1};
let book = {"title": "JavaScript",
            "sub-title": "The big one",
            for: "all",
            author: { firstname: "Bob", surname: "Dobolina"}};



// 2. new
let o = new Object(); // {}
let a = new Array();  // []
let d = new Date();
let m = new Map();



// 4. Object.create()
let o1 = Object.create({x: 1, y: 2}); // creates prototype as well
console.log(o1.x + o1.y);

let o2 = Object.create(null); // no inheritance, including built-ins
let o3 = Object.create(Object.prototype); // same as o3 = {}

/*
let o4 = {x: "don't change this value"};
library.function(Object.create(o4)); // guards agst modification

try {
  o4.x = 'new value';
} catch {
  console.log("cannot change o4's properties")
}
*/
