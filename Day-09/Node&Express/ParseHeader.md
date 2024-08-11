You need a header for a authorization and authentication, rate limiting etc.

const express = require('express');
const app = express();

app.get('/headers',(req,res) => {
    const username = req.headers;
    res.json({
        username
    })
})

app.listen(3000);