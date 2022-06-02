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
    nom:{
        type:DataTypes.STRING,
        allowNull:false
    },
    prenom:{
        type:DataTypes.STRING,
        allowNull:false
    },
    age:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    contact:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false
    }

    ,
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
// User.hasOne(Medecin);
// Medecin.belongsTo(User
// //     ,{

// // }
// );

//Medecin.sync({force:true});
//end seconde

module.exports = Medecin;