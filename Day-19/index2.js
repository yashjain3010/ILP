async function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = "Hello async/await"
            resolve(data);
        },1000);
    })
}

async function fetchfromFetchData(){
    try{
    const response = await fetchData();
    console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

fetchfromFetchData();