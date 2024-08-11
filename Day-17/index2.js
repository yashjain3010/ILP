const arr1 = [1,2,3,4,5];

const arr = arr1.map(x => x%2);
console.log(arr);

const arr2 = arr1.map((value,index,arr) => {
    return `Value is ${value}, Index is ${index} and arr is ${arr}`
})

console.log(arr2);