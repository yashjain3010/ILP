//Shallow Copy 

//In shallow copy the changes made in the nested object or array will reflect in both original and copied object or array

let original = {
    a: 1,
    b: {
        c: 2
    }
}

let copy = {...original};

console.log(copy);

copy.b.c = 3;

console.log(original);

//Deep Copy

//In Deep Copy the changes made in the nested structure in the object or array do not affect the original.

let original1 = {
    a: 1,
    b: {
        c: 2
    }
}

let copy1 = JSON.parse(JSON.stringify(original1));

console.log(copy1);

copy1.b.c = 3;
console.log(original1.b.c);
console.log(copy1.b.c);