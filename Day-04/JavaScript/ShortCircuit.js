//Short circuit evaluation is a concept in programming where logical operators are used to determine the result of an expression 
//in a way that avoids unneccessary computations.

// this concept is particularly useful for implementing conditional logic efficiently.

//Javascript uses short circuit evaluation using logical operator (&& , ||)

function getDefaultName(){
    return "Hello Mr"
}

let usrname = "" || getDefaultName();


console.log(usrname);

function greet(name) {
  let userName = name || 'Guest';
  console.log(`Hello, ${userName}!`);
}

greet(); 
greet('Alice'); 
