const dbConfig = require('./config'); // เรียกต่าต่างๆ ที่ใช้ในการเชื่อมต่อกับฐานข้อมูล
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
   dbConfig.dbName, // ชื่อของฐานข้อมูลเช่น 'BornToDevDB'
    dbConfig.username, //'youusername'
    dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect 
  });

  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;


  db.Users = require('./model/Users')( sequelize , Sequelize );

  module.exports = db;