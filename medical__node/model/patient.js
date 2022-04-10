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
const User= require("./user");

const sequelize = db.sequelize;
const Patient = sequelize.define("Patient", {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey: true
    }
});

User.hasOne(Patient);
Patient.belongsTo(User,{
    foreignKey:{
        //allowNull:false,
      //  name:"userId"
    }
});
//Patient.sync({ force: true });

module.exports = Patient;