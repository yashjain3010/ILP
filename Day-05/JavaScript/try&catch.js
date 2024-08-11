//Try catch block is use for handling exceptions in structured way 

//syntax

try{
    const result = 10/0;
    console.log(result);
}
catch(error){
    console.log(error.message);
}

finally{
    console.log('Finally block executed');
}