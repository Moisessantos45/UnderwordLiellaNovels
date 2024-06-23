import fs from "fs";
import multer from "multer";
import decompress from "decompress";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./contenido");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("archivo");

const subirContenido = async (req, res) => {
  upload(req, res, async function (err) {
    if (err) {
      return res.status(500).send("Error al guardar el archivo.");
    }

    const rutaArchivoZIP = "./contenido/" + req.file.filename;

    const nombreCapitulo = req.body.capitulo;
    const nombreCarpeta = req.body.carpeta;

    const carpetaDestino = `./contenido/${nombreCarpeta}/${nombreCapitulo}`;
    fs.mkdirSync(carpetaDestino, { recursive: true });

    try {
      await decompress(rutaArchivoZIP, carpetaDestino).then((files) => {
        res.send("Archivo ZIP subido y descomprimido exitosamente.");
      });
      fs.unlinkSync(rutaArchivoZIP);
    } catch (error) {
      return res.status(500).send("Error al descomprimir el archivo.");
    }
  });
};

export { subirContenido };
