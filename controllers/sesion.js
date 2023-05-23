import { Login } from "../models/login.js";
import { Cards } from "../models/voluem.js";
import { Capitulos } from "../models/Capitulos.js";
import { Novela } from "../models/Novelas.js";
import { createClient } from "redis";

const redisClient = createClient();

const admin = async (req, res) => {
  const volumene = await Login.findAll({
    where: {
      usuario: "rouni",
    },
  });
  console.log("valor de gurdad", volumene);
  res.render("panel", {
    pagina: "panel",
    volumene,
  });
};

const administrador = async (req, res) => {
  const volumene = await Login.findOne({ where: { sesion: true } });
  const contenido = await Login.findAll({ where: { usuario: "rouni" } });
  const datosBase = await Cards.findAll();
  const datosCapi = await Capitulos.findAll();
  const visitasNovelas = await Novela.findAll();

  const secret = req.session.secret;
  const secretCookie = req.cookies.secret;

  if (!secret || secret !== secretCookie || !volumene || volumene.secret !== secret) {
    return res.redirect("/login");
  }

  res.render("layout/admins", {
    pagina: "admins",
    contenido,
    datosBase,
    datosCapi,
    visitasNovelas,
  });
};

export { admin, administrador };

