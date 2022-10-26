const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Balanza = sequelize.define("Balanza", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  rack_principal_limpieza: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  rack_principal_limpieza_observaciones: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rack_principal_limpieza_foto: {
    type: DataTypes.BLOB,
    allowNull: true,
  },
  rack_principal_limpieza_foto_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rack_principal_orden: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  rack_principal_orden_observaciones: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rack_principal_orden_foto: {
    type: DataTypes.BLOB,
    allowNull: true,
  },
  rack_principal_orden_foto_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  funcionamiento_ap: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  funcionamiento_ap_observaciones: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  funcionamiento_telefono: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  funcionamiento_telefono_observaciones: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ups: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  ups_observaciones: {
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
});
module.exports = Balanza;
