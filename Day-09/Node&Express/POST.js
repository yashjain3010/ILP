const express = require('express');
const app = express();

app.use(express.json());

app.post('/add-content',(req,res) => {
    const newContent = req.body.content;

    if(!newContent){
        return res.status(200).json({
            error : 'Content is required'
        })
    }

    textContent.push(newContent);

    res.status(201).json({message : "Content added Successfully"})
})