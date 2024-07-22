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