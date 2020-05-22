let i = 0;

mainloop: while(i < 10) {
  console.log(i);
  little_loop: if (i > 5) {
    console.log('aye aye');
    if (i == 7) {
      console.log('sebbin!');
      i++;
      continue mainloop;
    }
  }
  i++;
}

const matrix = [[0, 1, 2],
              [1, 2, 3],
              //[2, 3, 'string'],
              [3, 4, 5]];

let sum = 0,
  success = false;

compute_sum: if (matrix) {
  for (let x = 0; x < matrix.length; x++) {
    let row = matrix[x];
    if (!row) { break compute_sum; }
    for (let y = 0; y < row.length; y++) {
      let cell = row[y];
      if (isNaN(cell)) { break compute_sum; }
      sum += cell;
    }
  }
  success = true;
}

console.log(success);
