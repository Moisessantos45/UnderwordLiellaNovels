import { DataTypes } from "sequelize";
import db from "../config/db.js";

export const Capitulos = db.define("capitulos", {
  capitulo: {
    type: DataTypes.STRING,
  },
  titulo: {
    type: DataTypes.STRING,
  },
  texto: {
    type: DataTypes.STRING,
  },
  nameingles: {
    type: DataTypes.STRING,
  },
  num: {
    type: DataTypes.INTEGER,
  },
});
