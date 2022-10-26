const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Casa_Principal = sequelize.define("Casa_Principal", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
});
module.exports = Casa_Principal;
