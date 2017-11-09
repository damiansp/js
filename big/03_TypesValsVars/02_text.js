// 3 Working with Strings
var s = "Damian";
s.charAt(0);       // "D"
s[0];              // 'D' (same)
s.substring(0, 3); // "Dam"
s.slice(0, 3);     // "Dam" (same)
s.indexOf('a');    // 1
s.lastIndexOf('a'); // 4
s.indexOf('a', 2);  // 4
s.split('a');       // ['D', 'mi', 'n']
s.replace('m', 'v'); // 'Davian'
s.toUpperCase();     // 'DAMIAN'


// 4 Pattern Matching
/^HTML/; // matches "HTML" at start of string
/[1-9][0-9]*/; // matches any number not beginning with 0
/\bjavascript\b/i; // matches "javascript" (word bound), case insenstive

var text = 'testing: 1, 2, 3';
var pattern = /\d+/g; // all instances of 1 or more digits
pattern.test(text);   // true
text.search(pattern); // 9 (position of 1st match)
text.match(pattern);  // ['1', '2', '3'] (array of all matches)
text.replace(pattern, 'o'); // 'testing: o, o, o'
text.split(/\D+/);          // ['', '1', '2', '3'] (split on non-digits)
