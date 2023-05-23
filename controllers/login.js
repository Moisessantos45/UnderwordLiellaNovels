import { Login } from "../models/login.js";
import crypto from "crypto";
import RedisStore from "connect-redis"
import session from 'express-session';
import {createClient} from "redis"
const redisClient = createClient();
const redisStore = new RedisStore({ client: redisClient });

const sesio = async (usuario) => {
  const inicio = await Login.findOne({ where: { usuario } });
  if (inicio) {
    inicio.sesion = true;
    await inicio.save();
  }
};

const peticion = async (req, res) => {
  const { usuario, contraseña } = req.body;

  try {
    const cuenta = await Login.findOne({ where: { usuario } });
    if (!cuenta) {
      return res.render("login", {
        pagina: "login",
        errores: [{ mensaje: "El usuario ingresado es incorrecto" }],
      });
    }
    if (cuenta.contraseña !== contraseña) {
      return res.render("login", {
        pagina: "login",
        errores: [{ mensaje: "La contraseña ingresada es incorrecta" }],
      });
    }
    const secret = crypto.randomBytes(32).toString("hex");
    cuenta.secret = secret;
    await cuenta.save();
    res.cookie("secret", secret, { httpOnly: true });
    await sesio(usuario);

    req.session.secret = secret; // Guardar la clave secreta en la sesión

    res.redirect("/layout/admins");
  } catch (error) {
    console.log(error);
    res.render("error", {
      pagina: "error",
      mensaje: "Ha ocurrido un error en el servidor",
    });
  }
};

export { peticion };
