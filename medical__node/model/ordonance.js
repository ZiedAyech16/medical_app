const { DataTypes } = require("sequelize");
const db = require("../database/db");
const Medecin = require("./medecin");
const Patient = require("./patient");

const sequelize = db.sequelize;
const Ordonnance = sequelize.define("Ordonnance",{
    id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
},
medicament:{
    type:DataTypes.STRING
},
apci:{
    type:DataTypes.STRING
}


}


)

Medecin.hasOne(Ordonnance);
Patient.hasOne(Ordonnance);

Ordonnance.belongsTo(Medecin);
Ordonnance.belongsTo(Patient);

//Ordonnance.sync({force:true});
module.exports = Ordonnance;