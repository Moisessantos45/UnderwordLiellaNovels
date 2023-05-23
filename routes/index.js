import express from 'express';
import {
paginaInicio,paginaNovela,paginaShimotsuki,paginaKurasu,controllers,login,imagen
} from "../controllers/paginaControler.js"

import { peticion } from '../controllers/login.js';
import { admin, administrador } from '../controllers/sesion.js';
import { enviar } from '../controllers/subirContenido.js';

const router = express.Router();

router.get("/",paginaInicio);

router.get("/:nombre",paginaNovela); 

router.get("/SHIMOTSUKI-SAN",paginaShimotsuki)

router.get("/partials/:nameingles", controllers.paginaCapitulo);

// router.get("/partials/capitulos", controllers.paginaCapitulo);

router.get("/KURASU",paginaKurasu)

router.get("/imagenurl",imagen)

router.get("/login",login)

router.post("/login",peticion)

router.get('/panel',admin);

router.get('/layout/admins',administrador);

router.post('/layout/admins',enviar);


// router.get("/plantilla",plantilla)


export default router;



