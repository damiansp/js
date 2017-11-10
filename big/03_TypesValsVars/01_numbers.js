// 3.1.5 Dates, Times
var birthday = new Date(1976, 10, 3); // for some reason month is 0-based
var now = new Date(2017, 10, 8, 22, 31, 30); // 10:31:30 pm
var rightNow = new Date();
var timeAlive = rightNow - birthday;

now.getFullYear(); // 2017
now.getMonth();    // 10 (Nov); 0-based
now.getDate();     // 8 (8th); 1-based ...go figure
now.getDay();      // 3 (Wed); 0 = Sun
now.getHours();    // 22 (10pm)
now.getUTCHours(); // hour UTC
now.toString();    // "Wed Nov 08 2017 22:31:30 GMT-0800 (PST)"
now.toUTCString(); // "Thu Nov 09 2017 06:31:30.000Z"

