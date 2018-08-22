var o = {'a': 1, 'b': 2, 'c': [3, 4, 5]};

for (var p in o) {
  console.log(o[p]);
}

var a = [], i = 0;
for (a[i++] in o) /* empty */;

console.log(a);
