// const { DataTypes } = require("sequelize/types");

// module.exports = (sequelize,DataTypes)=>{
//     var Patient = sequelize.define("Patient",{
//         //attributes patients
//     }, {
//         classMethods: {
//             associate: function(models){
//                 models.Patient.belongsTo(models.User, {
//                     foreignKey: {
//                         allowNull: false
//                     }
//                 })
//             }
//         }
//     })
// }

const { DataTypes } = require("sequelize");
const Medecin = require("./medecin");
const Secretaire = require("./secretaire");
const User= require("./user");

const sequelize = db.sequelize;
const Patient = sequelize.define("Patient", {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey: true
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

// User.hasOne(Patient);
// Patient.belongsTo(User
//     ,{
//     foreignKey:{
//         //allowNull:false,
//       //  name:"userId"
//     }
// }
// );


Medecin.hasOne(Patient);
Patient.belongsTo(Medecin);

Secretaire.hasOne(Patient);
Patient.belongsTo(Secretaire);


//Patient.sync({ force: true });

module.exports = Patient;