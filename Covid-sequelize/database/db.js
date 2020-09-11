const { Sequelize } = require('sequelize');
const { database } = require('../config');
const Usermodel = require('./models/User');

const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password, {
        host:database.host,
        dialect: "mysql"
    });


const User = Usermodel(sequelize,Sequelize);

sequelize.sync({ force:false }).then(() =>{
    console.log("tabla creada");
})


module.exports = {
    User
}