const {Sequelize, DataTypes}=require("sequelize");

const db = require("../router/db");
const User = require("./user");
const sequelize = db.sequelize

const Secretaire = sequelize.define("Secretaire",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }

});

User.hasOne(Secretaire, {
    foreignKey: {
        // name: 'user_id',
        // type:DataTypes.UUID,
        // allowNull:false
    }
});
Secretaire.belongsTo(User);
//Secretaire.sync({force:true});
module.exports = Secretaire;