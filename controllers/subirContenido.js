import { Cards } from "../models/voluem.js";
import { Capitulos } from "../models/Capitulos.js";

const uploadContent = async (req, res) => {
  const { nombre, volumen, drive, mega, imagen } = req.body;
  try {
    await Cards.create({
      volumen,
      drive,
      mega,
      imagen,
      nombre,
    });

    res.redirect("/layout/admins");
  } catch (error) {
    res.render("error", {
      pagina: "error",
      mensaje: "Ha ocurrido un error en el servidor",
    });
  }
};

const agregarCapi = async (req, res) => {
  const { capitulo, titulo, texto, nameingles, num } = req.body;
  try {
    await Capitulos.create({
      capitulo,
      titulo,
      texto,
      nameingles,
      num,
    });
    res.redirect("/layout/admins");
  } catch (error) {
    res.render("error", {
      pagina: "error",
      mensaje: "Ha ocurrido un error en el servidor",
    });
  }
};

const updateDataCapi = async (req, res) => {
  const { capitulo, titulo, texto, nameingles, num } = req.body;
  try {
    const capituloMayus =
      capitulo.charAt(0).toUpperCase() + capitulo.substring(1);

    const capi = await Capitulos.findOne({
      where: { capitulo: capituloMayus, nameingles: nameingles, num: num },
    });

    if (!capi) {
      return res.status(404).json({ mensaje: "La tarjeta no existe" });
    }
    // Validación de campos
    if (capitulo && capitulo !== "") {
      capi.capitulo = capitulo;
    }
    if (titulo && titulo !== "") {
      capi.titulo = titulo;
    }
    if (texto && texto !== "") {
      capi.texto = texto;
    }
    if (nameingles && nameingles !== "") {
      capi.nameingles = nameingles;
    }
    if (num && num !== "") {
      capi.num = num;
    }

    await capi.save();
    res.redirect("/layout/admins");
  } catch (error) {
    res.render("error", {
      pagina: "error",
      mensaje: "Ha ocurrido un error en el servidor",
    });
  }
};

const updateData = async (req, res) => {
  const { nombre, volumen, volumennovel, nombrenovel, drive, mega, imagen } =
    req.body;
  try {
    const card = await Cards.findOne({
      where: { nombre: nombrenovel, volumen: volumennovel },
    });

    if (!card) {
      return res.status(404).json({ mensaje: "La tarjeta no existe" });
    }
    // Validación de campos
    if (volumen && volumen !== "") {
      card.volumen = volumen;
    }
    if (drive && drive !== "") {
      card.drive = drive;
    }
    if (mega && mega !== "") {
      card.mega = mega;
    }
    if (imagen && imagen !== "") {
      card.imagen = imagen;
    }
    if (nombre && nombre !== "") {
      card.nombre = nombre;
    }

    await card.save();
    res.redirect("/layout/admins");
  } catch (error) {
    res.render("error", {
      pagina: "error",
      mensaje: "Ha ocurrido un error en el servidor",
    });
  }
};

const deleteDataCapi = async (req, res) => {
  const { capitulo, num } = req.body;
  try {
    const capiMuy = capitulo.charAt(0).toUpperCase() + capitulo.substring(1);
    await Capitulos.destroy({
      where: {
        capitulo: capiMuy,
        volumen: num,
      },
    });

    res.redirect("/layout/admins");
  } catch (error) {
    res.redirect("/error"); // redirigir a una página de error personalizada
  }
};

const deleteDataVol = async (req, res) => {
  const { volumennovel, nombrenovel } = req.body;
  try {
    await Cards.destroy({
      where: {
        nombre: nombrenovel,
        volumen: volumennovel,
      },
    });

    res.redirect("/layout/admins");
  } catch (error) {
    res.redirect("/error"); // redirigir a una página de error personalizada
  }
};

export {
  uploadContent,
  agregarCapi,
  updateDataCapi,
  updateData,
  deleteDataCapi,
  deleteDataVol,
};
