Q.1 Why do we use functions in JavaScript?

- We use function to make a code reusable and function is used to breaking down a complex problems into a smaller problems.

Q.2 What is Function Invocation?

- Function Invocation simply mean that when you calling or execute a function is known as Function Invocation.

Q.3 Does a function behave like an object in Javascript? Prove it by an example.

- Yes a function behave like an object in Javascript

Eg. function helloworld(){
    console.log('hello world);
}

helloworld.message = 'I am greeting you'

helloworld.showmessage = function(){
    console.log(greet.message);
}

console.log(helloworld.message);
helloworld.showmessage();

Q.4 What are Events in Javascript?

- Events in javascript are the DOM features in which we can change shape,stype and structure of the web document.A common event we know are clicks,key presses,mouse movement and form submission this all are known as events in javascript

Q.5 What is a string?

- String is a primitive data types and group of character is known as a string and string can include letters,numbers,whitespace character and system. String is immutable in nature.

Eg: string s1 = "Hello, World!";

Q.6 What is an array? Is it static or dynamic in Javascript?

- Array is a data type which store ordered/continues collection of elements.Array can include number,string,object.

In javascript a array is dynamic in nature we can update a array and change the size of array after creation and in js you don't need to declare a size of the array they automatically grow and shrink.

Q.7 Difference between Map and Set?

1. Map have a unique key whereas set have a unique values
2. Map allow you to retrieve a value using a key, where in set you can check only those value which are present in the set
3. Map allow duplicate value with different key and set doesn't allow any duplicate value.

Q.8 Difference between Array and Map?

- They both are used to store collection of data 

Diff

1. In array numbering start from 0 and in map you can store any value as a key
2. Array is a order list of values where as map is collection of key value pair

Q.9 What are array methods? List a few names?

- Arrat methods are special type of function which are used to adding,removing,sorting and transforming elements of the array

List of Array methods are -

1. push
2. pop
3. shift
4. slice
5. unshift
6. join
7. forEach
8. map
9. sort
10. reverse etc 

Q.10  In how many ways can we traverse through an array in Javascript?

- You can traverse in a array with many ways and few of them are ;-

1. for-loop
2. forEach
3. map
4. filter
5. reduce
6. every
7. some


Programs

1. Reverse an array?

- let arr1 = [1,2,3,4,5,6];

arr1.reverse();

console.log(arr1);

2. Explain the properties of the join array method function via program?

- The join is used to concatenate all elements in the array into a single element

Eg. let arr1 = ['fruits','apple','cherry','banana']

let joinuse = arr1.join(' ');
console.log(joinuse);

4. Merge to sets in javascript? 

- let set1 = new Set([1,3,4]);
  let set2 = new Set([4,5,6]);

  set2.forEach(value => set1.add(value));
  console.log(set1);

