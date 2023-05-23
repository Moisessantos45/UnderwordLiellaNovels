import Sequelize from "sequelize";
import db from "../config/db.js";

export const Novela=db.define("infonovels",{
  nombre:{
    type:Sequelize.STRING
  },
  imagen:{
    type:Sequelize.STRING
  },
  visitas: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  tipo:{
    type:Sequelize.STRING
  }
});
