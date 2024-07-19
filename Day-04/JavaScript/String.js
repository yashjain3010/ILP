//string are sequence of character used to represent text. they can be create using "'", """ or "`"

//String is Immutable in nature mean once it was create than it cannot be change.

//Concatenation in string

let string1 = "Hello";
let string2 = "World";

let greeting = string1 + string2;

console.log(greeting);

//String length

let string3 = "Hello my name is yash jain and i am here learning about strings"

console.log(string3.length);

//Changing Case

let string4 = "String in UpparCase or Lowercase";

console.log(string4.toLowerCase());
console.log(string4.toUpperCase());

//Substring

let string5 = "Hello now we are seeing the substring in strings"

console.log(string5.slice(0,20));
console.log(string5.substring(0, 10));

//Finding a Substring 

console.log(string5.indexOf('now'));

//case sensitive

console.log(string5.indexOf("Now"));

//Replace

console.log(string5.replace("now we are", "we will be"))

//Splitting a String

let string6 = 'Hello World from Split string';
let string7 = string6.split(', ');
console.log(string7);






