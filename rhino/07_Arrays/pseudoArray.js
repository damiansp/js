var a = {};
var i = 0;
var total = 0;

while (i < 10) {
  a[i] = i * i;
  i++;
}
a.length = i;

for (var j = 0; j < a.length; j++) total += a[j];

console.log(total);
