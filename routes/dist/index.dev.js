"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _paginaControler = require("../controllers/paginaControler.js");

var _login = require("../controllers/login.js");

var _sesion = require("../controllers/sesion.js");

var _subirContenido = require("../controllers/subirContenido.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/", _paginaControler.paginaInicio);
router.get("/:nombre", _paginaControler.paginaNovela);
router.get("/SHIMOTSUKI-SAN", _paginaControler.paginaShimotsuki); // router.get("/partials/:nameingles", controllers.paginaCapitulo);
// router.get("/partials/capitulos", controllers.paginaCapitulo);

router.get("/KURASU", _paginaControler.paginaKurasu);
router.get("/imagenurl", _paginaControler.imagen);
router.get("/login", _paginaControler.login);
router.post("/login", _login.peticion);
router.get('/panel', _sesion.admin);
router.get('/layout/admins', _sesion.administrador);
router.post('/layout/admins', _subirContenido.enviar); // router.get("/plantilla",plantilla)

var _default = router;
exports["default"] = _default;