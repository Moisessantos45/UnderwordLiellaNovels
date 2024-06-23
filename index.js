import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";
import { fileURLToPath } from "url";
import path from "path";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();
// Conectar a la base de datos
db.authenticate()
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log(error));

const port = process.env.PORT || 4000;

app.use(cookieParser());

// Agregar body parser
app.use(express.urlencoded({ extended: true }));

// Configurar vistas de Pug
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Agregar carpeta pública para archivos estáticos
app.use(express.static(path.join(__dirname, "public")));
app.use("/contenido", express.static("contenido"));

app.get("/favicon.ico", (req, res) => res.status(204));

// Agregar router
app.use("/", router);
app.listen(port, () => {
  console.log(`El servidor está funcionando en el puerto ${port}`);
});
