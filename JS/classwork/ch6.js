var num1 = 5;
var num2 = 8;
var num3 = 0;
var num4 = 0;
num3 = num1++ + ++num1;
//num3 = ++num2 + --num2 + num2+++num1---num2;
num4 = ++num2- --num2 + num2++ + num1-- -num2;
console.log(num3);
console.log(num4);
