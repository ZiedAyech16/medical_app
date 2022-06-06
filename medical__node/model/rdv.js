const { DataTypes } = require("sequelize");
const Medecin = require("./medecin");
const Patient = require("./patient");


const sequelize = db.sequelize;

const rdv = sequelize.define("rdv",{
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


Medecin.hasOne(rdv);
rdv.belongsTo(Medecin);

Patient.hasOne(rdv);
rdv.belongsTo(Patient);

 //rdv.sync({force:true});

module.exports = rdv;