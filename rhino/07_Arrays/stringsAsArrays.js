var s = 'test';
console.log(s.charAt(0));
console.log(s[1]);

s = 'JavaScript';
console.log(Array.prototype.join.call(s, ' '));

s2 = Array.prototype.filter.call(
  s,
  function(x) { return x.match(/[^aeiou]/); })
  .join('');
console.log(s2);


