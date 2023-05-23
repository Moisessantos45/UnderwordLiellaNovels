"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imagen = exports.login = exports.paginaKurasu = exports.paginaShimotsuki = exports.paginaNovela = exports.paginaInicio = void 0;

var _Novelas = require("../models/Novelas.js");

var _voluem = require("../models/voluem.js");

var _Capitulos = require("../models/Capitulos.js");

var _login = require("../models/login.js");

var aumentarVisitas = function aumentarVisitas(nombreNovela) {
  var novela;
  return regeneratorRuntime.async(function aumentarVisitas$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_Novelas.Novela.findOne({
            where: {
              Nameabre: nombreNovela
            }
          }));

        case 2:
          novela = _context.sent;

          if (!novela) {
            _context.next = 10;
            break;
          }

          if (!(novela.nombre !== "inicio")) {
            _context.next = 8;
            break;
          }

          novela.visitas++;
          _context.next = 8;
          return regeneratorRuntime.awrap(novela.save());

        case 8:
          _context.next = 11;
          break;

        case 10:
          console.log("No se encontr\xF3 ninguna novela con el nombre \"".concat(nombreNovela, "\"."));

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
};

var paginaInicio = function paginaInicio(req, res) {
  var novelass, noveNw, noveOri, mangas, visitas;
  return regeneratorRuntime.async(function paginaInicio$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_Novelas.Novela.findAll({
            where: {
              tipo: "NL"
            }
          }));

        case 2:
          novelass = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(_Novelas.Novela.findAll({
            where: {
              tipo: "NW"
            }
          }));

        case 5:
          noveNw = _context2.sent;
          _context2.next = 8;
          return regeneratorRuntime.awrap(_Novelas.Novela.findAll({
            where: {
              tipo: "NO"
            }
          }));

        case 8:
          noveOri = _context2.sent;
          _context2.next = 11;
          return regeneratorRuntime.awrap(_Novelas.Novela.findAll({
            where: {
              tipo: "Manga"
            }
          }));

        case 11:
          mangas = _context2.sent;
          _context2.next = 14;
          return regeneratorRuntime.awrap(_Novelas.Novela.findAll({
            order: [['visitas', 'DESC']],
            limit: 7
          }));

        case 14:
          visitas = _context2.sent;
          _context2.next = 17;
          return regeneratorRuntime.awrap(aumentarVisitas("inicio"));

        case 17:
          console.log(novelass);
          res.render("inicio", {
            pagina: "inicio",
            novelass: novelass,
            noveNw: noveNw,
            noveOri: noveOri,
            mangas: mangas,
            visitas: visitas
          });

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.paginaInicio = paginaInicio;

var paginaShimotsuki = function paginaShimotsuki(req, res) {
  return regeneratorRuntime.async(function paginaShimotsuki$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(aumentarVisitas("SHIMOTSUKI-SAN WA MOB GA SUKI"));

        case 2:
          res.render("SHIMOTSUKI-SAN", {
            pagina: "SHIMOTSUKI-SAN ",
            volumene: volumene
          });

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.paginaShimotsuki = paginaShimotsuki;

var paginaKurasu = function paginaKurasu(req, res) {
  return regeneratorRuntime.async(function paginaKurasu$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(aumentarVisitas("TSUKUSHITAGARI NA UCHI NO YOME NITSUITE DERE TEMOII KA?"));

        case 2:
          res.render("KURASU", {
            pagina: "KURASU"
          });

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
}; // export const controllers = {
//     paginaCapitulo: async (req, res) => {
//         const nameingles = req.params.nameingles;
//         const capitulo = await Capitulos.findAll({
//             where: {
//                 nameingles: nameingles
//             }
//         });
//         const capituloAnterior = await Capitulos.findOne({
//             where: {
//                 num: capitulo[0].num - 1
//             }
//         });
//         console.log("anterior", capituloAnterior)
//         const capituloSiguiente = await Capitulos.findOne({
//             where: {
//                 num: capitulo[0].num + 1
//             }
//         });
//         console.log("siguiente", capituloSiguiente)
//         res.render(`partials/${nameingles}`, {
//             pagina: nameingles,
//             capitulo: capitulo,
//             capituloAnterior: capituloAnterior ? capituloAnterior.nameingles : null,
//             capituloSiguiente: capituloSiguiente ? capituloSiguiente.nameingles : null
//         });
//     }
// };


exports.paginaKurasu = paginaKurasu;

var paginaNovela = function paginaNovela(req, res) {
  var nombreNovelas, volumene;
  return regeneratorRuntime.async(function paginaNovela$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          nombreNovelas = req.params.nombre;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_voluem.Cards.findAll({
            where: {
              nombre: nombreNovelas
            }
          }));

        case 3:
          volumene = _context5.sent;
          _context5.next = 6;
          return regeneratorRuntime.awrap(aumentarVisitas(nombreNovelas));

        case 6:
          // const nombreVista = nombreNovelas.toUpperCase(); // Convertir a mayúsculas
          res.render(nombreNovelas, {
            pagina: nombreNovelas,
            volumene: volumene
          });

        case 7:
        case "end":
          return _context5.stop();
      }
    }
  });
};

exports.paginaNovela = paginaNovela;

var login = function login(req, res) {
  return regeneratorRuntime.async(function login$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          res.render("login", {
            pagina: "login"
          });

        case 1:
        case "end":
          return _context6.stop();
      }
    }
  });
};

exports.login = login;

var imagen = function imagen(req, res) {
  return regeneratorRuntime.async(function imagen$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          res.render("imagenurl", {
            pagina: "imagenurl"
          });

        case 1:
        case "end":
          return _context7.stop();
      }
    }
  });
};

exports.imagen = imagen;