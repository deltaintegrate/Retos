//routes
const { Router } = require('express');
const request = require('request');

const router = Router();


const HOST = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';



router.get('/api/users', (req, res) =>{
    request.get(HOST, {json:true}, (err,r)=>{
        if(err){
            console.log(err);
        } else {
            res.send(r.body);
        }
    });
});

router.get('/api/users/:id', (req, res) =>{
    request.get(HOST , {json:true}, (err,r)=>{
        if(err){
            console.log(err);
        } else {
            var dataparam = [];
            var data = r.body;
            if (req.params.id === "F"){
                console.log("aqui estoy");
            for(let i in data){
                console.log("aqui estoy2");
                if (data[i].sexo === req.params.id){
                    console.log("aqui estoy3");
                    dataparam.push(data[i]);
                }

            }
          
             return res.send(dataparam);
            }

            if (req.params.id === "M"){
                console.log("aqui estoy");
            for(let i in data){
                console.log("aqui estoy2");
                if (data[i].sexo === req.params.id){
                    console.log("aqui estoy3");
                    dataparam.push(data[i]);
                }

            }
          
             return res.send(dataparam);
            }
            
            if ((req.params.id >= 0 && req.params.id <=20)){
                console.log("aqui estoy");
            for(let i in data){
                console.log("aqui estoy2");
                if (data[i].edad === req.params.id){
                    console.log("aqui estoy3");
                    dataparam.push(data[i]);
                }

            }
          
             return res.send(dataparam);
            }

            if ((req.params.id >= 20 && req.params.id <=40)){
                console.log("aqui estoy");
            for(let i in data){
                console.log("aqui estoy2");
                if (data[i].edad === req.params.id){
                    console.log("aqui estoy3");
                    dataparam.push(data[i]);
                }

            }
          
             return res.send(dataparam);
            }
            if ((req.params.id >= 40 )){
                console.log("aqui estoy");
            for(let i in data){
                console.log("aqui estoy2");
                if (data[i].edad === req.params.id){
                    console.log("aqui estoy3");
                    dataparam.push(data[i]);
                }

            }
          
             return res.send(dataparam);
            }
        }
        return  res.send("no encontramos tu valor");
    });
});


module.exports = router;