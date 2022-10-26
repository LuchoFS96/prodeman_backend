const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Camaras = sequelize.define("Camaras", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  chequear_visualizacion: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  chequear_visualizacion_observaciones: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
module.exports = Camaras;
