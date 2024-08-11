Q.1 What are anonymous functions in JavaScript?

- An anonymous function is a function without a name. These function are not accessible after creation unless they are assigned in a another function or assign to a variable

Eg. function(){
    console.log("Hello World");
}

Q.2 Explain strict comparison and Abstract comparison in javascript?

- Strict Comparison simply mean that '===' means when we compare two variable than those two variable have same value and same data type then it is 'true' otherwise it return 'false'

Eg. 1 === '1'  

It is false

- Abstract Comparison simply mean that '==' means when we compare two variable with this sign than it only check the two values have equal or not it doesn't check datatype of the variable.

Eg. 1 == '1'

It is true

Q.3 Difference b/w arrow functions and regular functions?

- Syntax difference between arrow function and regular functions.

- Regular function have there own this keyword but arrow function inherit 'this' keyword from surrounding context

- Arrow function cannot be used as a constructor and regular function can do.

Q.4 What is Hoisting in JavaScript?

- Hoisting is a javascript mechanism where you can use variables and functions before you have declared them in the code.

Q.5 JavaScript is a garbage collected programming language, explain how?

- In Javascript it automatically allocate memory to a variable and deallocate during the execution and it use a heap memory. This process helps developer to assigned value to a variable.

function garbagecollection(){
    let obj1 = {}
    let obj2 = {}

    obj1.reference = obj2;
    obj2.reference = obj1;
}

garbagecollection();

Q.6 Explain Shallow copy vs Deep copy in Javascript?

- Shallow Copy :- In a Shallow copy it make a copy from a references and when we change the change value then the original value also change in shallow copy and we use a spread operator in this.

const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };

shallowCopy.b.c = 3;
console.log(original.b.c);

- Deep Copy :- In a Deep copy it make a copy of that variable or object and the changes made doesn't affect the original value.

const original = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.b.c = 3;
console.log(original.b.c);

Q.7 What is Object.freeze?

- Object.freeze is a method in javascript and that makes an object immutable. Once an object is frozen,you cannot change the properties of object,add new properties,remove existing properties. This is useful when you want to ensure that an object become constant throughtout the execution of your program.

Program

function getRandominTworange(min1,max1,min2,max2){
    const ranges = [
       { min: min1, max: max1 },
       { min: min2, max: max2 }
    ];

    const randomRange = ranges[Math.floor(Math.random()*ranges.length)]

    return Math.floor(Math.random() * (randomRange.max - randomRange.min + 1) + randomRange.min);
}

console.log(getRandominTworange(-100,0,800,900));

