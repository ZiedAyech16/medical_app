const { DataTypes } = require("sequelize");

const sequelize = db.sequelize;
const Specialite = sequelize.define("Specialite",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    nom:{
        type:DataTypes.STRING
    }
});
//Specialite.sync({force:true});

module.exports =  Specialite;