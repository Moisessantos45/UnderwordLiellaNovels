import { Login } from "../models/login.js";
import { Cards } from "../models/voluem.js";
import { Capitulos } from "../models/Capitulos.js";
import { Novela } from "../models/Novelas.js";

const admin = async (req, res) => {
  const volumene = await Login.findAll({
    where: {
      usuario: "rouni",
    },
  });

  res.render("panel", {
    pagina: "panel",
    volumene,
  });
};

const administrador = async (req, res) => {
  try {
    const [contenido, datosBase, datosCapi, visitasNovelas] = await Promise.all(
      [
        Login.findAll({ where: { usuario: "rouni" } }),
        Cards.findAll(),
        Capitulos.findAll(),
        Novela.findAll(),
      ]
    );

    res.render("layout/admins", {
      pagina: "admins",
      contenido,
      datosBase,
      datosCapi,
      visitasNovelas,
    });
  } catch (error) {
    res.render("error", {
      pagina: "error",
      mensaje: "Ha ocurrido un error en el servidor",
    });
  }
};

export { admin, administrador };
