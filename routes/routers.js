import express from 'express';
import {
paginaNovela
} from "../controllers/paginaControler.js"

const routers = express.Router();

router.get("/:nombre", paginaNovela);

export default routers;