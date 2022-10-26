const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Agroinsumos = sequelize.define("Agroinsumos", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  funcionamiento_ap: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  funcionamiento_ap_observaciones: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
module.exports = Agroinsumos;
