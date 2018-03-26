// Hoisting moves all vars and function decalrations to the top of the current
// scope, regardless of where defined

// Functions using the `function` definition are automatically hoisted, e.g.:

// Function invoked at start of code:
hoist();

// other code here...

// func def at end of code
function hoist() {
  console.log('Hoist Me!');
}
