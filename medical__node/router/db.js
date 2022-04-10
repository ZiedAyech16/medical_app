const mysql = require("mysql2");
const config = require("./config");
const Sequelize = require("sequelize");

module.exports = db = {}
const {host,port,user,password,database}=config.database;

const pool = mysql.createPool({host,port,user,password})
pool.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
const sequelize =new Sequelize(database, user, password, {dialect:'mysql',port:port,pool:{}});
db.sequelize=sequelize

// Secretaire.hasOne(User, {
//     foreignKey: {
//         name: 'user_id',
//         type:DataTypes.UUID,
//         allowNull:false
//     }
// });
// User.belongsTo(Secretaire);
//sequelize.sync({force:true});