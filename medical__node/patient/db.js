const mysql = require('mysql2');
const config = require("./config");

const Sequelize = require("sequelize");
const ConnectionConfig = require('mysql/lib/ConnectionConfig');
const User = require('./user');

module.exports = db = {};
const {host, port, user,password,database}=config.database;

const pool = mysql.createPool({host,port,user,password});

pool.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

//console.log({host, port, user,password,database});
const sequelize = new Sequelize(database, user, password,{dialect:'mysql',port:'3308',
pool: {
    // max:config.pool.max,
    // min:config.pool.min,
    // acquire:config.pool.acquire,
    // idle:config.pool.idle
}})
// db.User = User;
// sequelize.sync();

db.sequelize=sequelize;