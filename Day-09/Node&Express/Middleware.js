const express = require('express');
const app = express();

app.use(express.json());

function middleware1(req,res,next){
    if(username != 'Yash' && password != 'Jain'){
        res.status(400).json({
            msg : "Incorrect Inputs"
        })
    }

    else{
        next();
    }
}

app.post('/',middleware1,(req,res) => {
    res.json({
        msg : "You log-in successfully"
    })
})

app.listen(3000);