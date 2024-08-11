// this two are used to fetch data from a server

/**
 * Fetch :- fetch method is built-in js function that simplifies the retrive data from the server and it simplify making HTTP request.
 * It return a promise in which we get a response of async code that event is successed or not.
 * 
 * Why it is used 
 * 
 * 1. Asychronous data retrieval
 * 2. flexible & powerful
 * 3. Promise based
 * 4. Web-api interaction
 */


fetch('https://google.com')
  .then(response => {
    if(!response.ok){
        throw new Error(`HTTP Error! Status: ${response.status}`)
    }
  })
  .then(data => {
    console.log("Data successfully fetch",data);
  })
  .catch(error => {
    console.error('Fetch Unsuccessful', error);
  })


/**
 * Fetch VS Axios
 * fetch
 * 1. Native browser API
 * 2. Lightweight
 * 3. Promise-based
 * 
 * axios
 * 1. External library
 * 2. Promise based
 * 3. Interceptor of HTTP req/res
 * 4. Automatic JSON Parsing
 *  */  

import axios from 'axios';

axios.get('https://api.example.com/hello')
  .then(response => {
    console.log(response.data);
  })
 
  .catch(error => {
    console.error(error);
  })



  //fetch in get request

  async function fetchData(){
    try{
    const response = await fetch('http://api.example.com/hello');
    const data = await response.json();
    console.log(data);
    }
    catch(e){
        console.error(error);
    }
  }

  fetchData();

  //axios in get request

  async function fetchfromAxios(){
    try{
        const response = await axios.get('https://api.example.com/hello');
        console.log(response.data);
    }
    catch(error){
        console.error(error);
    }
  }

  fetchfromAxios();


  //fetch in post request

  async function fetchinPost(){
    const url = '<https://www.api.example.com/hello';
    const datatosend = {
        key1 : "value1",
        key2 : "value2"
    }

    try{
        const response = await fetch(url,{
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(datatosend),
        })

        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }

  }

  fetchinPost();


//axiosinpost

async function axiosinpost(){
    const url = '<https://api.example.com/hello';
    const datatosend = {
        key1 : "value1",
        key2 : "value2"
    }

    try{
        const response = await axios.post(url.datatosend);
        console.log(response.data);
    }
    catch(error){
        console.log(error);
    }
}

axiosinpost();



