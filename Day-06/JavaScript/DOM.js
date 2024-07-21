//ECMAScript

/**
 * ECMAScript is a also known as ES and the javascript is based on the ECMAScript 
 * And we simply say that javascript follow the setofrules and certain task that js behaves in a certain way.
 */

//Auxiliary API

/**
 * Auxiliary API is the addition interface and functionality provided by JS other than the core functionalities.
 * This extend the capabilities of JS
 * 
 * Eg. 1. NodeJS API
 *  
 *     2. Third Party API
 * 
 *     3. Web API - DOM,fetch.localstorage
 * 
 */

//1 NodeJS API

const fs = require('fs');

fs.readFile('a.txt','utf8',(err,data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})

//Document

/**The DOM structure is used to changed the programming interface and it represent the page that program can change document structure
 * styling and content.
 */


//Classes vs ID 

/** Uniqueness ;- ID is unique and classes can be shared 
 *  Application :- Classes are for styling multiple element 
 * ID :- ID are for styling a specific element or targeting js
*/