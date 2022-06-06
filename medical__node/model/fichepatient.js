const { DataTypes } = require("sequelize");
const db = require("../database/db");
const Medecin = require("./medecin");
const Patient = require("./patient");
const sequelize = db.sequelize;

const FichePatient = sequelize.define("FichePatient",{
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

Medecin.hasOne(FichePatient);
FichePatient.belongsTo(Medecin);

Patient.hasOne(FichePatient);
FichePatient.belongsTo(Patient);

 //FichePatient.sync({force:true});

module.exports = FichePatient;