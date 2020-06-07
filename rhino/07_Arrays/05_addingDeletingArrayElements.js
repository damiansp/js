let a = [];
a[0] = 'zero';
a[1] = 'one';
a.push('two');
a.push('three', 'four');
console.log(a); // ['zero', 'one', 'two', 'three', 'four']

delete a[2];
console.log(2 in a); // false
console.log(a);      // ['zero', 'one', <1 empty item>, 'three', 'four']
console.log(a.length); // 5

