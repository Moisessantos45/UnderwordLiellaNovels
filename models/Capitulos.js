import Sequelize from "sequelize";
import db from "../config/db.js";

export const Capitulos=db.define("capitulos",{
  capitulo:{
    type:Sequelize.STRING
  },
  titulo:{
    type:Sequelize.STRING
  },
  texto: {
    type: Sequelize.STRING
  },
  nameingles:{
    type: Sequelize.STRING
  },
  num:{
    type: Sequelize.INTEGER
  }
});