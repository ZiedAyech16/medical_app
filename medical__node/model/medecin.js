const { DataTypes } = require("sequelize");
const db = require("../database/db");
const User = require("./user");

const sequelize = db.sequelize;

const Medecin = sequelize.define("Medecin",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    num_order:{
        type:DataTypes.STRING,
    },
    specialite:{
        type:DataTypes.STRING
    }

});


//first pour la création
//Medecin.sync({force:true});
//end first


//Seconde
User.hasOne(Medecin);
Medecin.belongsTo(User,{

});

//Medecin.sync({force:true});
//end seconde

module.exports = Medecin;