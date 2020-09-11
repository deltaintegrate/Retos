module.exports = (sequelize,type) =>{

    return sequelize.define('user',{
        id:{
            type:type.INTEGER,
            primaryKey:true
        },

        fecha_notificacion:type.STRING,
        cod_divipola:type.STRING,
        ciudad_ub:type.STRING,
        departamento:type.STRING,
        atencion:type.STRING,
        edad:type.STRING,
        sexo:type.STRING,
        tipo:type.STRING,
        estado:type.STRING,
        pasc_procedencia:type.STRING,
        fis:type.STRING,
        fecha_diagnostico:type.STRING,
        fecha_recuperado:type.STRING,
        fecha_reporte_web:type.STRING,
        tipo_recuperacion:type.STRING,
        codigo_departamento:type.STRING,
        codigo_pais:type.STRING,
        pertenencia_etnica:type.STRING
    });




}

