import generateToken from "../helpers/generateToken.js";
import { Login } from "../models/login.js";

const setUserSession = async (usuario) => {
  try {
    const inicio = await Login.findOne({ where: { usuario } });
    if (!inicio) {
      throw new Error("Usuario no encontrado");
    }

    inicio.sesion = true;
    await inicio.save();
  } catch (error) {
    throw new Error("Error al iniciar sesión");
  }
};

const loginHandler = async (req, res) => {
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

    cuenta.secret = generateToken(usuario);

    await cuenta.save();
    await setUserSession(usuario);

    res
      .cookie("secret", cuenta.secret, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        expires: new Date(Date.now() + 3600000),
      })
      .redirect("/layout/admins");
  } catch (error) {
    res.render("error", {
      pagina: "error",
      mensaje: "Ha ocurrido un error en el servidor",
    });
  }
};

const cerrarSesion = async (req, res) => {
  const { usuario } = req.query;
  try {
    const user = await Login.findOne({ where: { usuario } });
    if (!user) {
      return res
        .status(404)
        .json({ mensaje: "Inicio de sesión no encontrado" });
    }

    user.secret = "";
    let cambio = user.sesion;
    await setUserSession(cambio);

    res.clearCookie("secret").redirect("/login");
  } catch (error) {
    res.render("error", {
      pagina: "error",
      mensaje: "Ha ocurrido un error en el servidor",
    });
  }
};

export { loginHandler, cerrarSesion };
