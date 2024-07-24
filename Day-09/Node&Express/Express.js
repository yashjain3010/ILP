const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req,res) => {
    res.send('Hello, this is the root/main route!')
})

app.get('/api',(req,res) => {
    res.json({
        message : "This is a API Route"
    })
})

app.get('/greet/:name',(req,res) => {
    const name = req.params;
    res.send(`Hello, ${name}`);
})

app.listen(3000);