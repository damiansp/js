function convert(x) {
  switch(typeof x) {
  case 'number':
    return x.toString(16);
  case 'string':
    return '"' + x + '"';
  default:
    return String(x);
  }
}

console.log(convert(999));
console.log(convert('nines'));
console.log(convert([9, 9, 9]));
