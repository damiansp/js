var kuku = new Array(10);

for (var i = 0; i < kuku.length; i++) kuku[i] = new Array(10);
for (var row = 0; row < kuku.length; row++) {
  for (var col = 0; col < kuku[row].length; col++) kuku[row][col] = row * col;
}

function get_product(a, b) { return kuku[a][b]; }

console.log(get_product(6, 8));
