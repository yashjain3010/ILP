To parse the body in a POST request, you need a middleware to handle different types of response such as a JSON response or form data 

const express = require('express);
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.post('/form',(req,res) => {
    const formData = req.body;
    res.json({
        receivedData : formData
    });
})

app.post('/json',(req,res) => {
    const jsondata = req.body;
    res.json({
        receivedData : jsonData;
    })
})

app.listen(3000);