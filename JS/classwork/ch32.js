var today = new Date();
var dDay = new Date("Jan 01, 20135");

var mtoday = today.getTime();
var mdDay = dDay.getTime();

var mDiff = mdDay - mtoday;

console.log(mtoday);
console.log(mdDay);

console.log(mDiff.toString());