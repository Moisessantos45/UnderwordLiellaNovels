import { Router } from "express";
import {
  paginaInicio,
  paginaNovela,
  paginaShimotsuki,
  paginaKurasu,
  login,
  imagen,
  paginaHeroine,
  HEROINE_Capitulos,
  paginaMicchaku,
  MICCHAKU_Capitulos,
  paginaHAZUKASHIGARIYA_CAPI,
  paginaMangas,
  logout,
} from "../controllers/paginaControler.js";
import { cerrarSesion, loginHandler } from "../controllers/login.js";
import { admin, administrador } from "../controllers/sesion.js";
import {
  agregarCapi,
  deleteDataCapi,
  deleteDataVol,
  uploadContent,
  updateData,
  updateDataCapi,
} from "../controllers/subirContenido.js";
import { paginaFormChar } from "../controllers/Mangas.js";
import { cambiarRuta } from "../models/cambiarRuta.js";
import { cambiarRuta2 } from "../models/cambiarRuta2.js";
import { cambiarRuta3 } from "../models/cambiarRuta3.js";
import authSesion from "../Middleware/authSesion.js";

const router = Router();

router.get("/", paginaInicio);

router.get("/:nombre", paginaNovela);

router.get("/Mangas", paginaFormChar);

router.get("/SHIMOTSUKI-SAN", paginaShimotsuki);

router.get("/KURASU", paginaKurasu);

router.get("/imagenurl", imagen);

router.get("/Mangascapi", paginaMangas);

router.get("/login", login);

router.post("/login", loginHandler);
router.get("/logout", logout);
router.post("/logout",authSesion, cerrarSesion);

router.get("/panel", admin);

router.get("/layout/admins", authSesion, administrador);

router.post("/layout/admins", uploadContent);
router.put("/layout/admins", updateData);
router.delete("/layout/admins/vol", deleteDataVol);

router.post("/layout/admins/capi", agregarCapi);
router.put("/layout/admins/capi", updateDataCapi);
router.delete("/layout/admins/capi", deleteDataCapi);

router.get("/HAZUKASHIGARIYA_CAPI", paginaHAZUKASHIGARIYA_CAPI);
router.post("/HAZUKASHIGARIYA_CAPI", cambiarRuta);

router.get("/HEROINE", paginaHeroine);

router.get("/HEROINE_CAPI", HEROINE_Capitulos);
router.post("/HEROINE_CAPI", cambiarRuta2);

router.get("/1LDK+JK", paginaMicchaku);

router.get("/MICCHAKU_CAPI", MICCHAKU_Capitulos);
router.post("/MICCHAKU_CAPI", cambiarRuta3);

export default router;
