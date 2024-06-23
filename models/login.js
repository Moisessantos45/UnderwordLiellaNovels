import { DataTypes } from "sequelize";
import db from "../config/db.js";

export const Login = db.define("cuentas", {
  usuario: {
    type: DataTypes.STRING,
  },
  contraseña: {
    type: DataTypes.STRING,
  },
  sesion: {
    type: DataTypes.BOOLEAN,
  },
  secret: {
    type: DataTypes.STRING,
  },
});
