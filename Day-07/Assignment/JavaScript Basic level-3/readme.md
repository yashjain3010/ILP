Q.1 Explain as much as you know about objects in javascript?

- Objects are a non-primitive data type and it is used to store data and they usually consist of several variable and in Object-Oriented Programming thing are revolve around object and it has some behaviour and properties and we use it for reusable code. They allow encapsulation of data and behaviour,support inheritance and data abstraction.

Q.2 ..................

class vector{
    constructor(x = 0,y = 0){
        this._x = x;
        this._y = y;
    }

    setX(x){
        this._x = x;
    }

    setY(y){
        this._y = y;
    }

    getX(){
        return this._x;
    }

    getY(){
        return this._y;
    }

    static create(x,y){
        return new Vector(x,y);
    }
}

let vector1 = vector.create(1,2);
console.log(vector1.getX());
console.log(vector1.getY());

Q.3 Do you think javascript is the language of the future?

- JavaScript is the most popular programming language for a web development and with the help of javascript we can make dynnamic and user-friendly website and it is a programming language which work on both front-end as well as back-end.
Javascript have the framework and libraries like NodeJS,ReactJS,ExpressJS,NextJS etc and it take javascript to new level and i think javascript have the very long future.

Programs -

1. Write code implementations of arr methods:-

a. forEach

const array = ['a','b','c'];

array.forEach((element,index,array) => {
    console.log(`${index} : ${element}`)
})

b. map

const numbers = [1,2,3,4,5];

const square = numbers.map(x => x*x);

console.log(square);

c. filter

const arr = [1,2,3,4,5,6,7,8,9];

const findOddnumber = arr.filter(x => x%2 === 1)

console.log(findOddnumber);

d. reduce

const number = [1,2,3,4,5];

const sum = number.reduce((acc,num) => acc + num,0);
console.log(sum);

e. includes

const arr1 = [1,2,3,4,5];
const istrue = arr1.includes(2);
console.log(istrue);

f. some

const number = [1,2,3,4,5];

const hasEven = number.some(num => num % 2 == 0)
console.log(hasEven);

g. Every

const arr = [1,2,4,5,8,7,88];
const allelement = arr.every(num => num < 40);
console.log(allelement);

Q.2 Simple array implementation

class SimpleArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(element){
        this.data[this.length] = element;
        this.length++;
        return this.length;
    }

    pop(){
        if(this.length === 0) return undefined;
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this._shiftitem(index);
        return item;
    }
}

const arr = new simplearray();
arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr.get(1));
console.log(arr.pop());
arr.delete(0);
console.log(arr.get(0));
console.log(arr.length);
