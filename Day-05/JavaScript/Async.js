//Asynchronous Functions

/**
 * 1.Callback Function :- When we pass a function as a parameter is known as callback function and is executed after the 
 * completion of that function.
 * 2.Promises :- It is more structured and readable way to handle async code compared to callbacks.
 * 3.Async/Await :- It is syntactice sugar on top of Promises,making async code more structure and readable and easier to write.
 * 
 * 
 */

async function fetchData(){
    return new Promise(resolve => {
        setTimeout(() => {
            const data = 'Hello, async/await';
            resolve(data);
        },1000)
    })
}

async function fetchDataandprint(){
    try{
        const result = await fetchData();
        console.log(result);
    }
    catch(e){
        console.error(e);
    }
}

fetchDataandprint();