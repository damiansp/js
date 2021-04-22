// 1. The for/await loop
const fs = require('fs');


async function parseFile(filename) {
  let stream = fs.createReadStream(filename, {encoding: 'utf-8'});
  for await (let chunk of stream) parseChunk(chunk);
}


const urls = [url1, url2, url3];

const promises = urls.map(url => fetch(url));

for (const promise of promises) {
  resp = await promise;
  handle(resp);
}

// cleaner:
for await (const resp of promises) handle(resp);



// 3. Asynchronous generators
