//Destructing 

//It can make code more readable and concise by reducing multiple line

//destructuring with default values

const [x = 10, y = 15] = [1];

console.log(x);
console.log(y);

//Skipping Values 

const [a, ,c] = [1,2,3];

console.log(a);
console.log(c);

//Rest parameter

const [head,...rest] = [1,2,3,4];

console.log(head);
console.log(rest);