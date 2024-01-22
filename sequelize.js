const Sequelize = require("sequelize");

const config = require("./config");

const sequelize = new Sequelize(config.DB, config.DB_USERNAME, config.DB_PASSWORD, {
  host: config.HOST,
  port: config.DB_PORT,
    dialect: "mysql", 
    dialectOptions: {
      useUTC: false,      //for reading from the database
      // dateStrings: true,
      // typeCast: true
      // timezone: "Asia/Kolkata"   //for writing to the database
  }     
});

module.exports = sequelize;
