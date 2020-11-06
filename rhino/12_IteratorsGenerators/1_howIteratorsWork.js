let iterable = [99];
let iterator = iterable[Symbol.iterator]();
for (let res = iterator.next(); !res.done; res = iterator.next()) {
  console.log(res.value);
}

let list = [1, 2, 3, 4, 5];
let iter = list[Symbol.iterator]();
let head = iter.next().value;
console.log(head); // 1
let tail = [...iter];
console.log(tail); // [2, 3, 4, 5]
