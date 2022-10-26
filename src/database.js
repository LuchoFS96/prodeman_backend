const { Sequelize } = require("sequelize");
require("dotenv").config();

const DATABASE = process.env.DATABASE;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  dialect: "mysql",
  //   dialectOptions: {
  //     user: USER,
  //     password: PASSWORD,
  //     database: DATABASE,
  //   },
});

module.exports = sequelize;
