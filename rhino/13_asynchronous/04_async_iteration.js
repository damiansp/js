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
function elapsedTime(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function* clock(interval, max=Infinity) {
  for (let count = 1; count <= max; count++) {
    await elapsedTime(interval);
    yield count;
  }
}


async function test() {
  for await (let tick of clock(300, 100)) { // loop 100x every 300ms
      console.log(tick);
  }
}



// 4. Implementing Asynchronous Iterators
function clock(interval, max=Infinity) {

  function until(time) {
    return new Promise(resolve => setTimeout(resolve, time - Date.now()));
  }

  return {
    startTime: Date.now(),
    count: 1,
    async next() {
      if (this.count > max) return {done: true};
      let targetTime = this.startTime + this.count*interval;
      await until(targetTime);
      return {value: this.count++};
    },
    [Symbol.asyncIterator]() { return this; }
  };
}





    
