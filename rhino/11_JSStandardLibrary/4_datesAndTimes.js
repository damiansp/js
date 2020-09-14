let now = new Date();
let epoch = new Date(0); // 12:00:00.0 a.m., 01 Jan 1970 GMT
let century = new Date(2100, 0, 1, 2, 3, 4, 5); // 02:03:04.005 01 Jan 2100
                                                // local time
let centuryUTC = new Date(Date.UTC(2100, 0, 1)); // 12:00 a.m. 01 Jan 2100 UTC
let centuryDupe = new Date('2100-01-01T00:00:00Z');
let d = new Date();
d.setFullYear(d.getFullYear() + 1);
console.log(d); // 2021-09-10T04:08:12.062Z



// 1. Timestamps
d.setTime(d.getTime() + 30000); // + 30s
console.log(d); // 2021-09-10T04:08:42.062Z
let startTime = Date.now(); // in ms
let sum = 0;
for (let i=0; i < 10000000; i++) { sum += i; }
let endTime = Date.now(); 
console.log(`Summing 10 million numbers took ${endTime - startTime}ms`);



// 2. Date Arithmetic
d.setMonth(d.getMonth() + 3, d.getDate() + 14);
console.log(d); // 2021-12-28T15:59:42.827Z



// 3. Formatting and Parsing Date Strings
let e = new Date(2020, 0, 1, 17, 10, 30); // 5:10:30 pm 01 Jan 2020
console.log(e.toString());
// Wed Jan 01 2020 17:10:30 GMT-0800 (Pacific Standard Time)
console.log(e.toUTCString());             // Thu, 02 Jan 2020 01:10:30 GMT
console.log(e.toLocaleDateString());      // 1/1/2020
console.log(e.toLocaleTimeString());      // 5:10:30 PM
console.log(e.toISOString());             // 2020-01-02T01:10:30.000Z


