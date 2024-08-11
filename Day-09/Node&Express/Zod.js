const express = require('express');
const app = express();
const {z} = require('zod');

const schema = z.object({
    firstname : z.string().min(3),
    lastname : z.string().min(6)
})

app.get('/',(req,res) => {
    const {username,password} = req.query;

    try{
        schema.parse({username,password});

        res.json({
            success: true
        })
    }
    catch(e){
        console.error(error);
    }
})

app.listen(3000);