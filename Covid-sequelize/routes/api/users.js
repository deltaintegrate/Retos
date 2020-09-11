const router = require('express').Router();
const request = require('request');

const { User } = require('../../database/db');

const HOST = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';

const data = [];
var tamano = 0;




//consultar y guardar cada 10 minutos
    setInterval(()=>{

        request.get(HOST, {json:true}, (err,r) =>{
            
            if(err){
                console.log(err)
            }else{
                console.log(r.body);
                // var data_inter = [];
                // console.log(r.body);
                // data_inter.push(r.body);
                // var setarray = data.concat(data_inter);
                // var setobj = new Set(setarray);
                // for(var element of setobj){
                //     data.push(element);
                // }
            }           
        });


            // console.log(data.length);
            // if( data.length == 0) {
            //     data.push(data_inter);
            //     tamano = data.length;
            // }else{
            //     var list = [];
            //     var listvariable=[]
            //     list.push(data_inter);
    
            //     for( let i=tamano; i <= list.length ;i++){
            //         listvariable.push(list[i]);
            //     }

            //     data.push(listvariable);

            //     // crea las tablas 
            //         if(data.length >= tamano){
            //             console.log("holiii")
                    
            //             if (err){
                
            //             }else{
            //                 console.log(typeof(data))
            //                 for (i in data){
            //                     // console.log(data[i]);
            //                     const user =  User.create(
                
            //                         {
            //                         id: parseInt(data[i].id_de_caso,10),
            //                         fecha_notificacion: data[i].fecha_de_notificaci_n,
            //                         cod_divipola: data[i].c_digo_divipola,
            //                         ciudad_ub:data[i].ciudad_de_ubicaci_n,
            //                         departamento:data[i].departamento,
            //                         atencion:data[i].atenci_n,
            //                         edad:data[i].edad,
            //                         sexo:data[i].sexo,
            //                         tipo:data[i].tipo,
            //                         estado:data[i].estado,
            //                         pasc_procedencia:data[i].pa_s_de_procedencia,
            //                         fis:data[i].fis,
            //                         fecha_diagnostico:data[i].fecha_diagnostico,
            //                         fecha_recuperado:data[i].fecha_recuperado,
            //                         fecha_reporte_web:data[i].fecha_reporte_web,
            //                         tipo_recuperacion:data[i].tipo_recuperaci_n,
            //                         codigo_departamento:data[i].codigo_departamento,
            //                         codigo_pais:data[i].codigo_pais,
            //                         pertenencia_etnica:data[i].pertenencia_etnica},
                                    
            //                     ).then(user =>{
            //                         console.log(user);
            //                     }).catch(err =>console.log("este es el error " + err));
            //                 }
            //             }
                       
                     
            //         }
                

            // }
                
         
    
    
     },600000)

//---------Consultar tabla previamente creada --------------
router.get('/estado/:id', async (req,res) =>{
    const userestado = await User.findOne({
        where:{ estado: req.params.id}
    });
    if(user === null){
        console.log("No ha sido encontrado");
    }else{
       return  res.send(user.id);
    }
})

router.get('/sexo/:id', async (req,res) =>{
    const usergenero = await User.findOne({
        where:{ sexo: req.params.id}
    });
    if(user === null){
        console.log("No ha sido encontrado");
    }else{
        return res.send(user.id);
    }
})

router.get('/ciudad/:id', async (req,res) =>{
    const userciudad = await User.findOne({
        where:{ ciudad_ub: req.params.id}
    });
    if(user === null){
        console.log("No ha sido encontrado");
    }else{
        return res.send(user.id);
    }

})

module.exports = router;