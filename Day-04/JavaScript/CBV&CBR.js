//Call by Value

//In call by value when a function is called with primitive data types such as number,string,boolean,null,undefined and symbol
//in call by value function receives a copy of the value and any modification in the argument does not affect the original variable

function callbyvalues(x){
    x = x + 5;
    console.log(x);
}

let a = 10;

callbyvalues(a);
console.log(a);


//Call by reference

//In Call by reference when a function is called with objects including array and function then it can use call by reference 
//This mean that the function receives a reference from a original object and any modification in object within the function 
//affet the original object

function callbyreference(obj){
    obj.property = "I Add on the some value on myObj";
    console.log(obj)
}

let myObj = {
    property : "original value"
}

callbyreference(myObj);

console.log(myObj)