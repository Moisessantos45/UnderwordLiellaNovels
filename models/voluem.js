import Sequelize from "sequelize";
import db from "../config/db.js";

export const Cards = db.define("volumenes", {
    volumen: {
        type: Sequelize.STRING
    },
    drive: {
        type: Sequelize.STRING
    },
    mega: {
        type: Sequelize.STRING
    },
    imagen: {
        type: Sequelize.STRING
    },
    backgroud:{
        type:Sequelize.STRING
    },
    visitas: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    nombre:{
        type:Sequelize.STRING
    }
});

