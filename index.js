const express = require('express');
const db= require('./config');
const bodyParser =  require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api' , (req, res)=>{
    console.log("hello User!");
})
app.use('/api/user',require('./router/router'));

app.listen(3000);