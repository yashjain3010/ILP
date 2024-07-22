Q.1 What is JavaScript?

JavaScript is a loosely Type programming language which is based on the ECMAScript and it follow the set of rules of ECMAScript and current version of ES is ES-6 and It is high level Programming Language.

Q.2 What is difference between var and let?


var :- In a function when we declare a variable with var then we can use it any where in the function and it scope is function scope and we redeclare it 

Eg:- function declarevar(){
    var a = 10;

    if(true){
        a = 20;
        console.log(a) //20
    }

    console.log(a); //20
}

let :- It has a block scope and that is the major difference between var and let and in modern js we use let over var due to stricting scoping rules and we cannot re-declare it.

function declarelet(){
    var a = 10;

    if(true){
        a = 20;
        console.log(a) //20
    }

    console.log(a); //10
}

Q.3 Why do we prefer const over var?

1. const have block scope where var have a functional scope.

2. we declare a const once in a block but we re-declare a var.

Q.4 What is the use of javascript in web browsers?

Use of JS are :-

1. With javascript we can make a dynamic website and enhance user experience.

2. Web API Interaction with the javascript like fetching data from server and deal with Asynchronous code.

3. Event Handling and DOM manipulation with the help of Javascript.

Q.5 What are Objects?

Objects are the Non-Primitive datatype in Javascript, it is a collection of different-2 primitive data types.In it we store the related data which is identified by unique id.

Q.6 What is an array and how is it different from an Object in Javascript?

- Array is a data type & collection of similar type of data and it store in a continuous memory allocation

- It is different from an object because in object we can story multiple type of datatypes data but not in array
 In object each value can be different data type but in arr it is not possible.


Q.7 What is function?

A function is a block of reusable code to do a particular task or to calculate a value.

Q.8 How can we implement call by value and call by reference in Javascript?

- Call by value :- In Call by value we make a copy of the value and then use it,and it pass the primitive data types through function and changes made in the values within a function doesn't affect the original value.

function callbyvalue(num){
    num = 100;
    console.log(num);
}

let num = 10;
console.log(num);
callbyvalue(num);
console.log(num);

- Call by refernece :- In Call by reference we take a original value and changes made it affect the original value and it pass in the non-primitive data types.

function callbyreference(obj1){
    obj1.name = "Hello"
    console.log(obj1.name);
}

let obj1 = {
    name : 'yash'
}

console.log(obj1.name);
callbyreference(obj1);
console.log(obj1.name);

Q.9 What are the primitive data types in Javascript?

Number,string,boolean,null and undefined all this are known as primitive datatype.

Q.10 What is DOM?

DOM is stand for Document Object Model and it is used to make your web document dynamic in nature and it is used to change the style and structure of the web document.

Q.11 Why do we need DOM?

DOM is a Web API which give you extra features beyond the ECMAScript and it give additional interface and functionality to make more dynamic website and in DOM we have root tree structure of HTML element and we can manipulate them and make a website dynamic with DOM and DOM give a events by which we make more appealing website.

Programs

Q.1 Average of array nums in Javascript?

let arr = [2,3,4,5,6,7,8];

let n = arr.length;
let sum = 0;

for(let i = 0 ; i < n ; i++){
    sum += arr[i];
}

let ans = sum/n;

console.log(ans);

or

let arr = [1,2,3,4,5,6,7];

const sum = arr.reduce((acc,num) => acc + num,0);

const average = sum/arr.length;

console.log(average);

Q.2 Swap two numbers by reference?

const obj = {
    num1 : 10,
    num2 : 20
}

let a1 = obj.num1;
    obj.num1 = obj.num2;
    obj.num2 = a1;

Q.3 Print the fibonacci sequence?

let n = 10;

let a = 0, b = 1, c;
let result = [a,b];
for(let i = 2 ; i < n ; i++){
    c = a + b;
    result.push(c);
    a = b;
    b = c;
}

console.log(result);

Q.4 Sort an array by both ascending and descending order?

Ascending order

const numbers = [1,2,4,2,43,2,33];
numbers.sort();

console.log(numbers);

Descending order

const numbers = [3,4,5,3,2,43,22,55,33,21,33,55,3];
numbers.sort((a,b) => b-a);

console.log(numbers);












