import { Novela } from "../models/Novelas.js";
import { Cards } from "../models/voluem.js";
import { Capitulos } from "../models/Capitulos.js"
import { Login } from "../models/login.js";

const aumentarVisitas = async (nombreNovela) => {
    const novela = await Novela.findOne({ where: { Nameabre: nombreNovela } });

    if (novela) {
        if (novela.nombre !== "inicio") {
            novela.visitas++;
            await novela.save();
        }
    } else {
        console.log(`No se encontró ninguna novela con el nombre "${nombreNovela}".`);
    }
};

const paginaInicio = async (req, res) => {
    const novelass = await Novela.findAll({
        where: {
            tipo: "NL"
        }
    });
    const noveNw = await Novela.findAll({
        where: {
            tipo: "NW"
        }
    });
    const noveOri = await Novela.findAll({
        where: {
            tipo: "NO"
        }
    });
    const mangas = await Novela.findAll({
        where: {
            tipo: "Manga"
        }
    });
    const visitas = await Novela.findAll({
        order: [['visitas', 'DESC']],
        limit: 7
    });
    await aumentarVisitas("inicio");
    console.log(novelass)
    res.render("inicio", {
        pagina: "inicio",
        novelass,
        noveNw,
        noveOri,
        mangas,
        visitas,
    });
}

const paginaShimotsuki = async (req, res) => {
    // Obtener la novela correspondiente y aumentar las visitas
    await aumentarVisitas("SHIMOTSUKI-SAN WA MOB GA SUKI");
    res.render("SHIMOTSUKI-SAN", {
        pagina: "SHIMOTSUKI-SAN ",
        volumene,
    })
}

const paginaKurasu = async (req, res) => {
    // Obtener la novela correspondiente y aumentar las visitas
    await aumentarVisitas("TSUKUSHITAGARI NA UCHI NO YOME NITSUITE DERE TEMOII KA?");
    res.render("KURASU", {
        pagina: "KURASU",
    })
}

// export const controllers = {
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


const paginaNovela = async (req, res) => {
    const nombreNovelas = req.params.nombre;
    const volumene = await Cards.findAll({
        where: {
            nombre: nombreNovelas,
        },
    });
    await aumentarVisitas(nombreNovelas)
    // const nombreVista = nombreNovelas.toUpperCase(); // Convertir a mayúsculas
    res.render(nombreNovelas, {
        pagina: nombreNovelas,
        volumene,
    });
}

const login = async (req, res) => {
    res.render("login", {
        pagina: "login",
    })
}

const imagen = async (req, res) => {
    res.render("imagenurl", {
        pagina: "imagenurl",
    })
}

export {
    paginaInicio,
    paginaNovela,
    paginaShimotsuki,
    paginaKurasu,
    login,
    imagen
}