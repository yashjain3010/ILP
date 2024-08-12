function fetchData(callback){
    setInterval(() => {
        const cb = "Hello, Callback!";
        callback(cb);
    },4000)
}

fetchData((result) => {
    console.log(result);
})