/** 3 The delete Operator */
var o = {x: 1, y: 2};
delete o.x;
console.log("x" in o);   // false
console.log(typeof o.x); // "undefined"
console.log(delete o.x); // true
console.log(delete o);   // false; can't delete var declared variable
console.log(delete 1);   // true; 1 is not a lvalue
this.x = 1;              // define prop of global object w/o var
console.log(delete x);   // true in non-strict; exception in strict
//x;                     // runtime error; x no longer defined

var a = [1, 2, 3];
delete a[2];
console.log(2 in a);   // false ??
console.log(a.length); // 3 
console.log(a);        // [1, 2, ]
