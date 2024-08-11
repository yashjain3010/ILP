//Reducer

//the Reducer method reduce the array and give a single out

let arr1 = [1,2,3,4,5,6];

let ans = arr1.reduce((accu,curvalue) => accu + curvalue);

console.log(ans);

//Some

// It test that the atleast one element in the array passes the test implemented by provided function. It return a boolean value.

const arr2 = [2,3,5,7,11];
let hasEven = arr2.some((num => num % 2 === 0))

console.log(hasEven);


//Every

//It check that in the array all the element pass through the assigned condition or not

const arr3 = [1,2,3,4,5,6];
let checkingAllareEven = arr3.every(nums => nums % 2)
console.log(checkingAllareEven)

//IndexOf

//It is to find the element at a return a index of that element

const arr4 = [1,2,3,4,5,6,7,8,8,7,5,4,3,2];
let checkIndex = arr4.indexOf(8);
console.log(checkIndex);

