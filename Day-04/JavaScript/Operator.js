// Arithmetic Operator 

let a = 10;
let b = 20;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(b/a);
console.log(a % b);
console.log(a ** b);

a++;
++b;

console.log(a);
console.log(b);

b--;
--a;

console.log(b);
console.log(a);
console.log(" ");

//Assignment Operator

let x = 100;

x += 5;
console.log(x);

x -= 10;
console.log(x);

x *= 100;
console.log(x);

x /= 10;
console.log(x);

x %= 7;
console.log(x);

x **= 3;
console.log(x);

console.log(" ");

//Comparison Operators

console.log(5 == '5');
console.log(5 === '5');
console.log(5 != 5);
console.log(5 != '5');
console.log(5 !== '5');
console.log(5 > 3);
console.log(3 > 5);
console.log(5 >=4);
console.log(5 <= 4);
console.log(" ");

//Logical Operators

let c = true;
let d = false;

console.log(c && d);
console.log(c || d);
console.log(!c);
console.log(!d);
console.log(" ");

//Bitwise Operators

let e = 5;
let f = 3;

console.log(e & f);
console.log(e | f);
console.log(~e);
console.log(e ^ f);
console.log(e << 1);
console.log(f >> 1);

//Ternary Operator

let age = 20;

let canVote = (age >= 18) ? 'Yes' : 'No';
console.log(canVote);

