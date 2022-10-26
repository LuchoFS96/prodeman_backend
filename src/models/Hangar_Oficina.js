const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Hangar_Oficina = sequelize.define("Hangar_Oficina", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  funcionamiento_telefono: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  funcionamiento_telefono_observaciones: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  limpiar_pc: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  limpiar_pc_observaciones: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  limpiar_pc_foto: {
    type: DataTypes.BLOB,
    allowNull: true,
  },
  limpiar_pc_foto_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  acomodar_cables: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  acomodar_cables_observaciones: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  acomodar_cables_foto: {
    type: DataTypes.BLOB,
    allowNull: true,
  },
  acomodar_cables_foto_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Hangar_Oficina;
