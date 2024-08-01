import { Client } from "pg";

 const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'mysecretpassword',
  });

  try{
    await client.connect();
    const insertQuery = "INSERT INTO users(username,email,password) VALUES ($1,$2,$3)";
    const values = [username,email,password];
    const res = await client.query(insertQuery,values);
    console.log(res);
  }
  catch(e){
    console.error(e);
  }