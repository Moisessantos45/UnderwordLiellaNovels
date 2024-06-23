"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var authSesion = function authSesion(req, res, next) {
  var token, decoded;
  return regeneratorRuntime.async(function authSesion$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          token = req.cookies.secret;

          if (token) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.redirect("/login"));

        case 3:
          try {
            decoded = _jsonwebtoken["default"].verify(token, process.env.SECRET_KEY);
            req.usuario = decoded.usuario;
            req.query.usuario = decoded.usuario;
            next();
          } catch (error) {
            res.redirect("/login");
          }

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = authSesion;
exports["default"] = _default;