const { DataTypes } = require("sequelize");
const db = require("../database/db");
const Medecin = require("./medecin");
const Patient = require("./patient");
const sequelize = db.sequelize;

const RDV = sequelize.define("RDV",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    date:{
        type:DataTypes.DATE,
        allowNull:false
    }
});

Medecin.hasOne(RDV);
RDV.belongsTo(Medecin);

Patient.hasOne(RDV);
RDV.belongsTo(Patient);

// RDV.sync({force:true});

module.exports = RDV;