const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 3434;
const app = express();




app.get('/', function (req, res) {
    res.send('Hello World')
})


mongoose.connect('mongodb://localhost:27017/blog_box')
    .then(()=> {
        console.log('connect MongoDB')
        app.listen(PORT, () => {
            console.log(`Server start on PORT: ${PORT}`)
        })
    })



