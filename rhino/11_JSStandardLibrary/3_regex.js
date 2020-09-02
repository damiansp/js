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
