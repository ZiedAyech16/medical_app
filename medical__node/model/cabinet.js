const { DataTypes } = require("sequelize");
const db = require("../database/db");
const Medecin = require("./medecin");

const sequelize = db.sequelize;

const Cabinet = sequelize.define("Cabinet",{
    id:{    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    allowNull:false
    },
    nom:{
        type:DataTypes.STRING
    },
    etablissement:{
        type:DataTypes.STRING
    },
    image:{
        type:DataTypes.STRING
    }


})

//Medecin.hasOne(Cabinet);
Cabinet.belongsTo(Medecin);

//Cabinet.sync({force:true});

module.exports = Cabinet;