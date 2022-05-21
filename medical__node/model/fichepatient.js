const { DataTypes } = require("sequelize");
const Medecin = require("./medecin");
const Patient = require("./patient");


const sequelize = db.sequelize;

const Fichepatient = sequelize.define("Fichepatient",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nom:{
        type:DataTypes.STRING
    },
    prenom:{
        type:DataTypes.STRING
    },
    contact:{
        type:DataTypes.INTEGER
    },
    age:{
        type:DataTypes.INTEGER
    },
    sexe:{
        type:DataTypes.STRING
    },
    hour:{
        type:DataTypes.STRING
    },
    hour:{
        type:DataTypes.STRING
    },
    jour:{
        type:DataTypes.STRING
    },
    month:{
        type:DataTypes.STRING
    },
    year:{
        type:DataTypes.STRING
    }
});


Medecin.hasOne(Fichepatient);
Fichepatient.belongsTo(Medecin);

Patient.hasOne(Fichepatient);
Fichepatient.belongsTo(Patient);

 //Fichepatient.sync({force:true});

module.exports = Fichepatient;