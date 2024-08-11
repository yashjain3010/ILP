//Promises

// Promises are Javascript Feature which deals with the asynchronous code and it provide more structured and readable code

//Promise tell about eventual completion or failure of the asynchronous operation and it handle error in a better manner


//Key Characteristics of Promises

/** 
 * 1. To deal with Asynchronous code
 * 2. for Error Handling
 * 3. Promise chaining - Promise support chaining through then method
 * 4. States of promises which are - Fullfilled,Pending and rejected
 * 
 */


/**
 * Why do we use Promises :-
 * 
 * 1. To avoid Callback hell
 * 2. for Error Handling
 * 3. Promise.all
 * 4. Promise chaining
 */

//Creating a Promise

const myPromise = new Promise((resolve, reject) => {
    
})

//Resolve a Promise

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Operation Successed");
    },3000)
})

//Reject a Promise

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Operation not Successed");
  }, 3000);
});


// using then and catch

successfulpromise
 .then((result) => {
    console.log(result);
 })
 .catch((error) => {
    console.log(error);
 })


 // chaining promises


 chainingpromises
  .then((result1) => {
    console.log(result1);
    return "New Value"
  })
  .then((newvalue) => {
    console.log(newvalue);
    return "Again"
  })
  .then((again) => {
    console.log(again);
  })
  .catch((error) => {
    console.error(error);
  })

  //Promise all

  Promise.all([promise,promise1])
   .then((values) => {
    console.log(values)
   })
   .catch((error) => {
    console.log(error);
   })