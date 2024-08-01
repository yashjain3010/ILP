import { Client } from "pg";

async function inserUserandAddress(
    username: string,
    password: string,
    email: string,
    city: string,
    country: string,
    street: string,
    pincode: number
) {
    const client = new Client({
        host: 'localhost',
        port: 4321,
        database: 'postgres',
        user: 'postgres',
        password: 'mysecretpassword'
    });

    try{
        await client.connect();

        await client.query('BEGIN');

        const insetUserText = `
        INSERT INTO addresses(user_id,city,country,street,pincode) VALUES ($1,$2,$3,$4,$5);
        `
        
        await client.query("COMMIT");

        console.log('User and Address Insert Successfully')
    }
    catch(e){
        await client.query('ROLLBACK');
        console.error('Error during transaction',e);
        throw e;
    }

    finally{
        await client.end();
    }
}

