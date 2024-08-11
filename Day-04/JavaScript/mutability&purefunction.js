//Mutability

//In JS mutability simply mean that ability to change the value of object after it been created
//In non-primitive data types are mutable in nature and primitive data types are immutable in nature

let str = "hello";
str[0] = 'H';

console.log(str);

let str1 = "Hello";
str1[0] = "h";

console.log(str1);

let obj1 = {
    a: 1
}

obj1.a = 2;

console.log(obj1);


//Pure functions

//Pure functions are the functions that give the same input always give the same output they are immutable in nature

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Output: 5
console.log(add(2, 3)); // Output: 5 (same input, same output)


//Impure function

let counter = 0;

function incrementCounter() {
  counter += 1; // This function modifies an external variable
  return counter;
}

console.log(incrementCounter()); // Output: 1
console.log(incrementCounter()); // Output: 2 (different output for same call)



