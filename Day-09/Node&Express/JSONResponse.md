You can send a JSON response using res.json() method. This method automatically set the application content-type header to application/json.

const express = require('express');
const app = express();

app.use(express.json());

app.post('/get-json',(req,res) => {
    const responseData = {
        message: "This is a JSON Response"
    }

    res.json(responseData);
})

app.listen(3000); 