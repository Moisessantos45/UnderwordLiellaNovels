import { Cards } from "../models/voluem.js"
import { Login } from "../models/login.js";
import { Capitulos } from "../models/Capitulos.js"

const sesio = async (sesion) => {
    const inicio = await Login.findOne({ where: { sesion } });
    if (inicio) {
        inicio.sesion = false;
        inicio.secret = "";
        await inicio.save();
    }
};
const enviar = async (req, res) => {
    const { nombre, volumen, drive, mega, imagen, tipo, usuario, capitulo, titulo, texto, nameingles,
        num
    } = req.body;
    try {
        if (tipo === "actuliazar") {
            const card = await Cards.findOne({ where: { nombre: nombre, volumen: volumen } });

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

            try {
                await card.save();
                res.redirect("/layout/admins");
            } catch (error) {
                console.log(error);
            }
        } else if (tipo === "agregar") {
            await Cards.create({
                volumen,
                drive,
                mega,
                imagen,
                nombre,
            });
            res.redirect("/layout/admins");
        } else if (tipo == "agregarcapi") {
            await Capitulos.create({
                capitulo,
                titulo,
                texto,
                nameingles,
                num,
            });
            res.redirect("/layout/admins");
        } else if (tipo == "actucapi") {
            const capituloMayus = capitulo.charAt(0).toUpperCase() + capitulo.substring(1);
            const capi = await Capitulos.findOne({ where: { capitulo: capituloMayus, nameingles: nameingles, num: num } });
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
            try {
                await capi.save();
                res.redirect("/layout/admins");
            } catch (error) {
                console.log(error);
            }
        } else if (tipo == "eliminarVol") {
            try {
                await Cards.destroy({
                  where: {
                    nombre: nombre,
                    volumen: volumen
                  }
                });
                res.redirect("/layout/admins");
              } catch (error) {
                console.log(error);
                res.redirect("/error"); // redirigir a una página de error personalizada
            }            
        }
        else if (tipo == "eliminarCapi") {
            const capiMuy = capitulo.charAt(0).toUpperCase() + capitulo.substring(1);
            await Capitulos.destroy({
                where: {
                    capitulo: capiMuy,
                    volumen: num
                }
            });
            res.redirect("/layout/admins");
        }
        else if (tipo === "cerrarsesion") {
            const login = await Login.findOne({ where: { usuario } });
            if (!login) {
                return res.status(404).json({ mensaje: "Inicio de sesión no encontrado" });
            }
            let cambio = login.sesion;
            await sesio(cambio);
            res.clearCookie("secret");
            res.redirect("/login");
        }
        else {
            res.render("error", {
                pagina: "error",
                mensaje: "Acción no válida",
            });
        }
    } catch (error) {
        console.log(error);
        res.render("error", {
            pagina: "error",
            mensaje: "Ha ocurrido un error en el servidor",
        });
    }
};


export {
    enviar
}