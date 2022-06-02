const {Sequelize, DataTypes}=require("sequelize");

const db = require("../router/db");
const Medecin = require("./medecin");
const User = require("./user");
const sequelize = db.sequelize

const Secretaire = sequelize.define("Secretaire",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },nom:{
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


});

Medecin.hasOne(Secretaire, {
    foreignKey: {
        // name: 'user_id',
        // type:DataTypes.UUID,
        // allowNull:false
    }
});
Secretaire.belongsTo(Medecin);
//Secretaire.sync({force:true});
module.exports = Secretaire;