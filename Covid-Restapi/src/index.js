const express = require('express');
const app = express();
const morgan = require('morgan');


//settings
app.set('port',process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
//recibir formatos json mediante express
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//routes

app.use(require('./routes/index'));

//empezando servidor

app.listen(app.get('port'), () =>{
    console.log(`server en el puerto ${3000}`);
});