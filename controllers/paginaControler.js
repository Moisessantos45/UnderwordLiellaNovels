import { Novela } from "../models/Novelas.js";
import { Cards } from "../models/voluem.js";
import fs from "fs";

const aumentarVisitas = async (nombreNovela) => {
  try {
    if (nombreNovela === "login" || nombreNovela === "inicio") return;

    const novela = await Novela.findOne({ where: { Nameabre: nombreNovela } });
    if (!novela) {
      throw new Error("No se ha encontrado la novela");
    }

    novela.visitas++;
    await novela.save();
  } catch (error) {
    throw new Error("Ha ocurrido un error en el servidor");
  }
};

const paginaInicio = async (req, res) => {
  try {
    const [novelass, noveNw, noveOri, mangas, visitas] = await Promise.all([
      Novela.findAll({
        where: {
          tipo: "NL",
        },
      }),
      Novela.findAll({
        where: {
          tipo: "NW",
        },
      }),
      Novela.findAll({
        where: {
          tipo: "NO",
        },
      }),
      Novela.findAll({
        where: {
          tipo: "Manga",
        },
      }),
      Novela.findAll({
        order: [["visitas", "DESC"]],
        limit: 7,
      }),
    ]);

    await aumentarVisitas("inicio");

    res.render("inicio", {
      pagina: "inicio",
      novelass,
      noveNw,
      noveOri,
      mangas,
      visitas,
    });
  } catch (error) {
    res.render("error", {
      pagina: "error",
      mensaje: "Ha ocurrido un error en el servidor",
    });
  }
};

const paginaShimotsuki = async (req, res) => {
  // Obtener la novela correspondiente y aumentar las visitas
  await aumentarVisitas("SHIMOTSUKI-SAN WA MOB GA SUKI");
  res.render("SHIMOTSUKI-SAN", {
    pagina: "SHIMOTSUKI-SAN ",
    volumene,
  });
};

const paginaKurasu = async (req, res) => {
  // Obtener la novela correspondiente y aumentar las visitas
  await aumentarVisitas(
    "TSUKUSHITAGARI NA UCHI NO YOME NITSUITE DERE TEMOII KA?"
  );
  res.render("KURASU", {
    pagina: "KURASU",
  });
};

const paginaNovela = async (req, res) => {
  const nombreNovelas = req.params.nombre;
  const volumene = await Cards.findAll({
    where: {
      nombre: nombreNovelas,
    },
  });
  await aumentarVisitas(nombreNovelas);
  // const nombreVista = nombreNovelas.toUpperCase(); // Convertir a mayúsculas
  res.render(nombreNovelas, {
    pagina: nombreNovelas,
    volumene,
  });
};

const login = async (req, res) => {
  res.render("login", {
    pagina: "login",
  });
};

const logout = async (req, res) => {
  res.render("logout", {
    pagina: "logout",
  });
};

const imagen = async (req, res) => {
  res.render("imagenurl", {
    pagina: "imagenurl",
  });
};

const paginaHAZUKASHIGARIYA_CAPI = async (req, res) => {
  const listaCarpetas = fs.readdirSync("./contenido/Hazukashigariya");
  const primeraCarpeta = listaCarpetas[0];
  const listaImagenes = fs.readdirSync(
    `./contenido/Hazukashigariya/${primeraCarpeta}`
  );
  const mostrarRetroceder = false;
  const mostrarAvanzar = listaCarpetas.length > 1;
  res.render("HAZUKASHIGARIYA_CAPI", {
    pagina: "HAZUKASHIGARIYA_CAPI",
    listaCarpetas,
    primeraCarpeta,
    listaImagenes,
    mostrarRetroceder,
    mostrarAvanzar,
  });
};

const paginaHeroine = async (req, res) => {
  await aumentarVisitas("HEROINE WA ZETSUBOU SHIMASHITA.");
  res.render("HEROINE", {
    pagina: "HEROINE",
  });
};

const HEROINE_Capitulos = async (req, res) => {
  const listaCarpetas = fs.readdirSync("./contenido/Heroine");
  const primeraCarpeta = listaCarpetas[0];
  const listaImagenes = fs.readdirSync(`./contenido/Heroine/${primeraCarpeta}`);
  const mostrarRetroceder = false;
  const mostrarAvanzar = listaCarpetas.length > 1;
  res.render("HEROINE_CAPI", {
    pagina: "HEROINE_CAPI",
    listaCarpetas,
    primeraCarpeta,
    listaImagenes,
    mostrarRetroceder,
    mostrarAvanzar,
  });
};

const paginaMicchaku = async (req, res) => {
  await aumentarVisitas("1LDK+JK IKINARI DOUKYO? MICCHAKU!? HATSU ECCHI!!?");
  res.render("1LDK+JK", {
    pagina: "1LDK+JK",
  });
};

const MICCHAKU_Capitulos = async (req, res) => {
  const listaCarpetas = fs.readdirSync("./contenido/Micchaku");
  const primeraCarpeta = listaCarpetas[0];
  const listaImagenes = fs.readdirSync(
    `./contenido/Micchaku/${primeraCarpeta}`
  );
  const mostrarRetroceder = false;
  const mostrarAvanzar = listaCarpetas.length > 1;
  res.render("MICCHAKU_CAPI", {
    pagina: "MICCHAKU_CAPI",
    listaCarpetas,
    primeraCarpeta,
    listaImagenes,
    mostrarRetroceder,
    mostrarAvanzar,
  });
};

const paginaMangas = async (req, res) => {
  res.render("Mangascapi", {
    pagina: "Mangascapi",
  });
};

export {
  paginaInicio,
  paginaNovela,
  paginaShimotsuki,
  paginaKurasu,
  login,
  logout,
  imagen,
  paginaHeroine,
  HEROINE_Capitulos,
  paginaMicchaku,
  MICCHAKU_Capitulos,
  paginaHAZUKASHIGARIYA_CAPI,
  paginaMangas,
};
