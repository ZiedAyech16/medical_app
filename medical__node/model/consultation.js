const { DataTypes } = require("sequelize");
const db = require("../database/db");
const Patient = require("./patient");
const Secretaire = require("./secretaire");

const sequelize = db.sequelize;

const Consultation = sequelize.define("Consultation",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    date:{
        type:DataTypes.DATE
    },
    duree:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING
    },
    frais:{
        type:DataTypes.STRING
    },
    apci:{
        type:DataTypes.STRING
    }
})

Secretaire.hasOne(Consultation);
Consultation.belongsTo(Secretaire);

Patient.hasOne(Consultation);
Consultation.belongsTo(Patient);

//Consultation.sync({force:true});

module.exports = Consultation;