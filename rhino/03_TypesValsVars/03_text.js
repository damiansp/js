// 3 Working with Strings
let msg = "Hello, " + "world!\n";
let name = "Boris";
let greeting = "Hey there, " + name + ".\n";
console.log(msg);
console.log(greeting);

let s = "Hello, World";
/* Substrings */
console.log(s.substring(1, 4)); // ell
console.log(s.slice(1, 4));     // ell
console.log(s.slice(-3));       // rld
console.log(s.split(', '));     // ["Hello", "World!"]

/* Searching */
console.log(s.indexOf('l'));     // 2
console.log(s.indexOf('l', 3));  // 3
console.log(s.indexOf('z'));     // -1
console.log(s.lastIndexOf('l')); // 10

/* Characteristics */
console.log(s.startsWith('Hell')); // true
console.log(s.endsWith('!'));      // true
console.log(s.includes('or'));     // true

/* Modify */
console.log(s.replace('llo', 'ya')); // Heya, world
console.log(s.toLowerCase());        // hello, world
console.log(s.toUpperCase());        // HELLO, WORLD
console.log(s.normalize());          // NFC by default
console.log(s.normalize('NFD'));     // also: 'NFKC', 'NFKD'

/* Inspect chars */
console.log(s.charAt(0));            // H
console.log(s.charAt(s.length - 1)); // d
console.log(s.charCodeAt(0));        // 72
console.log(s.codePointAt(0));       // 72
console.log(s[0]);                   // H
console.log(s[s.length - 1]);        // d

/* Padding */
console.log('x'.padStart(3));      // '  x'
console.log('x'.padEnd(3));        // 'x  '
console.log('x'.padStart(3, '*')); // '**x'
console.log('x'.padEnd(3, '~'));   // 'x~~'

/* Trimming */
let test = '  test  ';
console.log(test.trim());      // test
console.log(test.trimStart()); // 'test  '
console.log(test.trimEnd());   // '  test'

/* Etc */
console.log(s.concat('!'));   // Hello, World!
console.log('>< '.repeat(5)); // >< >< >< >< ><


// 4 Template Literals
s = `hello world`;
greeting = `Hello, ${name}.`;
console.log(greeting); // Hello, Boris.

console.log(`\n`.length);           // 1
console.log(String.raw`\n`.length); // 2

