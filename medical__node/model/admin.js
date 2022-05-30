const { DataTypes } = require("sequelize");
const User = require("./user");

const seequlize = db.sequelize;
const Admin = seequlize.define("Admin",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    
})

User.hasOne(Admin);
Admin.belongsTo(User);

//Admin.sync({force:true});
module.exports = Admin;