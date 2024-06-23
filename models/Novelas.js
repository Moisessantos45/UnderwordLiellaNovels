import { DataTypes } from "sequelize";
import db from "../config/db.js";

export const Novela = db.define("infonovels", {
  nombre: {
    type: DataTypes.STRING,
  },
  imagen: {
    type: DataTypes.STRING,
  },
  visitas: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  tipo: {
    type: DataTypes.STRING,
  },
});
