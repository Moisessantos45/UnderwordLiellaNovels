import { DataTypes } from "sequelize";
import db from "../config/db.js";

export const Cards = db.define("volumenes", {
  volumen: {
    type: DataTypes.STRING,
  },
  drive: {
    type: DataTypes.STRING,
  },
  mega: {
    type: DataTypes.STRING,
  },
  imagen: {
    type: DataTypes.STRING,
  },
  backgroud: {
    type: DataTypes.STRING,
  },
  visitas: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  nombre: {
    type: DataTypes.STRING,
  },
});
