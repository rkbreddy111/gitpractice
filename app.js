const moment = require('moment');
console.log("This is my first program on github");
console.log("Today is ", moment(moment(new Date()).startOf('day')).format("DD-MM-yyyy"));

console.log("This is my second program on github");
console.log("Today is ", moment(moment(new Date()).startOf('day')).format("DD-MM-yyyy"));