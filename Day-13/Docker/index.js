const {Client} = require('pg');

const connectionString = "postgresql://postgres:mysecretpassword@localhost:5432/postgres";

const client = new Client({
    connectionString : connectionString
})

client.connect(err => {
    if(err){
        console.log('connection error',err);
    }
    else{
        console.log('connected to the database');
    }
})

client.query('Select NOW()',(err,res) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(res.rows[0]);
    }
    client.end();
})

//This is a example of how to use the pg library to connect to the PostgreSQL server running in the DOCKER container.
//It create a new client with connection string and connect to the database and run a fetch query to get current Date and time.
//and then closes the connection.