const express = require('express');
const app = express();

app.get('/api/user',(req,res) => {
    const userid = req.query.userid;

    res.json({
        userid
    })
})

app.listen(3000);