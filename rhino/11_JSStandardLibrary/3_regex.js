// 1. Defining Regexes
let pattern = /s$/;
let pattern2 = new RegExp('s$');
let caseInsensitivePattern = /s$/i;


// 2. String Methods for Pattern Matching
console.log('JavaScript'.search(/script/ui)); // 4
console.log('Python'.search(/script/ui));     // -1

let text = 'I like javascript';
console.log(text.replace(/javascript/gi, 'JavaScript'));

let quote = /"([^"]*)"/g; //";
console.log('He said "stop"'.replace(quote, '<<$1>>'));

let quot = /"(?<quotedText>[^"]*)"/g; //";
console.log('He said "stop"'.replace(quot, '~$<quotedText>~'));

let s = '15 times 15 is 225';
console.log(s.replace(/\d+/gu, n => parseInt(n).toString(16)));
console.log('7 plus 8 equals 15'.match(/\d+/g)); // 7 8 15

let url = /(\w+):\/\/([\w.]+)\/(\S*)/;
let txt = 'Visit my blog at http://www.example.com/~jimbo';
let match = txt.match(url);
let fullURL, protocol, host, path;
if (match !== null) {
  fullURL = match[0];
  protocol = match[1];
  host = match[2];
  path = match[3];
  console.log(
    `URL: ${fullURL}\nprotocol: ${protocol}\nhost: ${host}\npath: ${path}`)
}


url = /(?<protocol>\w+):\/\/(?<host>[\w.]+)\/(?<path>\S*)/;
match = txt.match(url);
console.log(match[0]);
console.log(match.input); // txt
console.log(match.index);  // 17
console.log(match.groups.protocol); // http
console.log(match.groups.host);     // www.example.com
console.log(match.groups.path);     // ~david


let vowel = /[aeiou]/y; // "sticky" vowel match
console.log('test'.match(vowel)); // null (does not begin w vowel)
vowel.lastIndex = 1;              // specify difft match position
console.log('test'.match(vowel)[0]); // 'e'
console.log(vowel.lastIndex);        // 2 (updated)
console.log('test'.match(vowel));    // null - no more matches
console.log(vowel.lastIndex);        // reset after fail

const words = /\b\p{Alphabetic}+\b/gu; // \p maybe not supported in Firefox yet
const tx = 'This is a naïve test of the matchAll() method.';
for (let word of tx.matchAll(words)) {
  console.log(`Found '${word[0]}' at index ${word.index}.`);
}



console.log('123,456,789'.split(','));
console.log('1, 2, 3,\n4, 5'.split(/\s*,\s*/));

const htmlTag = /<([^>]+)>/;
console.log('Testing<br />1, 2, 3'.split(htmlTag));



// 3. The RegExp Class
