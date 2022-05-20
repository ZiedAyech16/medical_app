const { DataTypes } = require("sequelize");
const Medecin = require("./medecin");

const sequelize = db.sequelize;

const Calender = sequelize.define("Calender",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    date:{
        type:DataTypes.DATE
    }
});


Medecin.hasOne(Calender);
Calender.belongsTo(Medecin);

//Calender.sync({force:true});

module.exports = Calender;