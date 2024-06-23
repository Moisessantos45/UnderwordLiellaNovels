import { Router } from "express";
import { paginaNovela } from "../controllers/paginaControler.js";

const routers = Router();

router.get("/:nombre", paginaNovela);

export default routers;
