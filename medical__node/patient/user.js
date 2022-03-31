const {Sequelize, DataTypes} = require("sequelize");

const db = require("./db");
const sequelize = db.sequelize;
const User = sequelize.define("User",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey: true
    },
    nom:{
        type:DataTypes.STRING,
        allowNull:false
    },
    prenom:{
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
    }
});

module.exports = User;