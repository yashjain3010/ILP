//TypeCasting

//It simply mean that converting a value of one datatype to another datatype

//Explicit TypeCast

//In it you need function or method to convert a value to specified type

let num = 123;
let num2 = String(num);

console.log(num2);
console.log(typeof(num2));

let str1 = "123";
let num1 = parseInt(str1,10)

console.log(num1);

//Implicit TypeCast

//It occur automatically by javascript 

let result = 5 + '5';
console.log(result);

let result1 = '5' * 2;
console.log(result1);

let result2 = '5' * '2';
console.log(result2);