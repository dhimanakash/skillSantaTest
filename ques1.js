// How to fetch the millisecond according to universal time from a given Date object?

var dateToday = new Date("October 15, 1996 05:35:32:77 GMT+11:00");
var utcMiliSeconds = dateToday.getUTCMilliseconds();
console.log(utcMiliSeconds);
