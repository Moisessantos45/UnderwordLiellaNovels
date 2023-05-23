import Sequelize from "sequelize";
import db from "../config/db.js";

export const Login=db.define("cuentas",{
  usuario:{
    type:Sequelize.STRING
  },
  contraseña:{
    type:Sequelize.NUMBER
  },
  sesion: {
    type: Sequelize.TINYINT
  },
  secret:{
    type: Sequelize.STRING
  }
});