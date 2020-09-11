const express = require('express');
const sequelize = require('./database/db');
const request = require('request');
const bodyParser = require('body-parser');

//database
const User = require('./database/models/User');

//settings

const apiRouter = require('./routes/api');

const HOST = process.env.PORT || 3000;


const app = express();

app.use(bodyParser.json());
app.use (bodyParser.urlencoded({extended:true}));

app.use('/api',apiRouter)


//arranca el servidor
app.listen(HOST,function(){
    console.log(`la aplicacionarranca en el puerto ${HOST}`);

})