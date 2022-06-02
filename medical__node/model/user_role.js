const { DataTypes } = require("sequelize");

const sequelize = db.sequelize;

const UserRole = sequelize.define("Userrole",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    email:{
        type:DataTypes.STRING
    },
    userId:{
        type:DataTypes.INTEGER
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

//UserRole.sync({force:true});
module.exports = UserRole;