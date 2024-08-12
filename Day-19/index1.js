successfulPromise
 .then((result) => {
    console.log(result);
    return 'New Value'
 }) 
 .then((newValue) => {
    console.log(newValue)
 })
 .catch((error) => {
    console.log(error);
 })

 const promise1 = Promise.resolve('One');
 const promise2 = Promise.resolve('Two');

 Promise.all([promise1,promise2])
   .then((values => {
    console.log(values);
   }))
   .catch((error => {
    console.log(error);
   }))